const { gql } = require('apollo-server-express');

const typeDefs = gql`

enum Place {
  CANCUN,
  CABO,
  HUATULCO,
  ACAPULCO,
  PUERTO VALLARTA
}

type Category {
    _id: ID
    name: String
  }
  
type Activity {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    place: [Place]
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    Activities: [Activity]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    place: [Place]
    activities(category: ID, name: String): [Activity]
    activity(_id: ID!): Activity
    user: User
    order(_id: ID!): Order
    checkout(Activities: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(Activities: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateActivity(_id: ID!, quantity: Int!): Activity
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
