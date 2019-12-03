import { gql } from "apollo-server";

export default gql`
  type Site {
    id: ID!
    name: String!
    url: String!
    logoUrl: String
    accounts: [Account!]
  }

  extend type Query {
    site(id: ID!): Site!
    sites: [Site!]!
  }

  extend type Mutation {
    createSite(name: String!, url: String!, logoUrl: String): Site!
    updateSite(id: ID!, name: String, url: String, logoUrl: String): Site!
    deleteSite(id: ID!): Site!
    restoreSite(id: ID!): Site!
    removeSite(id: ID!): Site!
  }
`;
