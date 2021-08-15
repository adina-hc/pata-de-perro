const db = require('./connection');
const { User, Activity, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Beach" },
    { name: "Night Life" },
    { name: "Rentals" },
    { name: "Spa" },
  ]);

  console.log('categories seeded');

  await Activity.deleteMany();

  const activities = await Activity.insertMany([
    {
      name: 'Snorkeling',
      description:
        'This activity is perfect for adults and children, under the instruction of professionals with clean and quality equipment. Prices are per person',
      image: 'snorkeling.jpeg',
      category: categories[0]._id,
      place: 'CANCUN',
      price: 65.00,

      quantity: 2
    },
    {
      name: 'Night Cruise',
      description:
        'Join us at our night cruise, departing at 6pm,where you can enjoy dinner with the most prestrigious chefs. After dinner, come to the dancefloor on the deck of the ship',
      image: 'cruise.jpeg',
      category: categories[1]._id,
      place: 'HUATULCO',
      price: 35.00,
      quantity: 5
    },
    {
      name: 'Banana',
      category: categories[2]._id,
      description:
        'Have fun while riding the banana, .',
      image: 'banana.jpeg',
      place: 'ACAPULCO',
      price: 20.50,
      quantity: 1
    },
    {
      name: 'Massage',
      category: categories[3]._id,
      description:
        'Relax and let go with our special massage packages. Our service includes aromatherapy, ice-cold and hot sauna, green detoxing tea, finishing with our award winning massage with hot stones.',
      image: 'massage.jpeg',
      price: 70.00,
      place: 'CABO',
      quantity: 1
    },
    {
      name: 'Bicycles',
      category: categories[2]._id,
      description:
        'Enjoy a ride in our beaches with our environmental friendly bikes.',
      image: 'bike-rental.jpeg',
      price: 14.99,
      place: 'CANCUN',
      quantity: 3
    },
    {
      name: 'Scuba diving',
      category: categories[0]._id,
      description:
        'Discover nature and its beaute under the sea, with our quality equipment. ',
      image: 'scuba.jpeg',
      price: 30,
      place: 'CABO',
      quantity: 2
    },
    {
      name: 'Kayak',
      category: categories[2]._id,
      description:
        'What better activity than kayaking your way into the ocean and getting that extra exercise. Rentals available',
      image: 'kayak.jpeg',
      price: 25.00,
      place: 'PUERTO VALLARTA',
      quantity: 1
    },
    {
      name: 'Parasailing',
      category: categories[0]._id,
      description:
        'See the beauty of the ocean from above! ',
      image: 'parasailing.jpeg',
      price: 35.00,
      place: 'CANCUN',
      quantity: 1
    },
    {
      name: 'Sailing',
      category: categories[0]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'sailing.jpeg',
      price: 100.00,
      place: 'CABO',
      quantity: 1
    },
    {
      name: 'Horse riding',
      category: categories[2]._id,
      description:
        'Enjoy a ride in your favorite horse along the beach, explore nature!.',
      image: 'horse-riding.jpeg',
      place: 'PUERTO VALLARTA',
      price: 40.00,
      quantity: 3
    },
    {
      name: 'Massage in a tent',
      category: categories[3]._id,
      description:
        'Enjoy the sound of the ocean waves while resting with a full body massage. Organic oils and aromatherapy to make you dream.',
      image: 'massage-tent.jpeg',
      price: 95.00,
      place: 'CANCUN',
      quantity: 1
    },
    {
      name: 'Swim with dolphis',
      category: categories[0]._id,
      description:
        'Adventure to swim with friendly mammals. Swimming with dolphins is not only fun, but they help you heal!.',
      image: 'dolphins.jpeg',
      place: 'HUATULCO',
      price: 45,
      quantity: 2
    }
  ]);

  console.log('activities seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Juanita',
    lastName: 'Tequilera',
    email: 'juanita@prueba.com',
    password: 'password12345',
    orders: [
      {
        activities: [activities[0]._id, activities[0]._id, activities[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Fausto',
    lastName: 'Kim',
    email: 'fkim@prueba.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
