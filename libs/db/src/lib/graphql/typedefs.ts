import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Tag {
    id: ID
    name: String!
  }

  type Query {
    tags: [Tag]
  }
`;
