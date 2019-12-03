import { gql } from "apollo-server";

export default gql`
  type Project {
    id: ID!
    name: String!
    notes: String
    accounts: [Account!]
  }

  extend type Query {
    project(id: ID!): Project!
    projects: [Project!]!
  }

  extend type Mutation {
    createProject(name: String!, notes: String, site: ID): Project!
    updateProject(
      id: ID!
      name: String
      notes: String
      accounts: [ID]
    ): Project!
    deleteProject(id: ID!): Project!
    restoreProject(id: ID!): Project!
    removeProject(id: ID!): Project!
  }
`;
