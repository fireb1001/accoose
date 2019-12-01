import { gql } from "apollo-server";

export default gql`
  type Account {
    id: ID!
    login: String!
    passhint: String!
    site: Site
    projects: [Project]
    domains: [Domain]
    tags: [Tag]
  }

  extend type Query {
    account(id: ID!): Account!
    accounts: [Account!]!
  }

  extend type Mutation {
    createAccount(
      login: String!
      passhint: String!
      site: ID
      tags: [ID]
    ): Account!
    updateAccount(
      id: ID
      login: String
      passhint: String
      site: ID
      tags: [ID]
    ): Account!
  }
`;
