import { gql } from '@apollo/client';

export const QUERY_activities = gql`
  query getActivities($category: ID) {
    activities(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($activities: [ID]!) {
    checkout(activities: $activities) {
      session
    }
  }
`;

export const QUERY_ALL_activities = gql`
  {
    activities {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        activities {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
