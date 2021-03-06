const { AuthenticationError } = require('apollo-server-express');
const { User, Activity, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51JNPfPLFMHcbQLphojdYxa9lal8NGusSBd98191tGIFrkO7Zx9uu08tVDs610tTz2x4BdioGAbE8SPUyj1E3dfD400SzyoyI86');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    activities: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Activity.find(params).populate('category');
    },
    activity: async (parent, { _id }) => {
      return await Activity.findById(_id).populate('category');
    },

    userinfo: async (parent, args, context) => {

      if (context.user) {
        const user = await User.findById(context.user._id).populate('category');
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.activities',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.activities',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ activities: args.activities });
      const line_items = [];
      const { activities } = await order.populate('activities').execPopulate();
      for (let i = 0; i < activities.length; i++) {
        const product = await stripe.products.create({
          name: activities[i].name,
          description: activities[i].description,
          images: [`${url}/images/${activities[i].image}`]
        });
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: parseInt(activities[i].price) * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { activities }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ activities });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateActivity: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Activity.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
