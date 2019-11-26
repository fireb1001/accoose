import { gql } from "apollo-server";

export default gql`
  type Site {
    id: ID!
    name: String!
    url: String!
    logoUrl: String
  }

  extend type Query {
    site(id: ID!): Site!
    sites: [Site!]!
  }

  extend type Mutation {
    createSite(name: String!, url: String!, logoUrl: String): Site!
  }
`;
