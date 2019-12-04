import { gql } from "apollo-server";

export default gql`
  type Tool {
    id: ID!
    name: String!
    notes: String
    use: String
  }

  extend type Query {
    tool(id: ID!): Tool!
    tools: [Tool!]!
  }

  extend type Mutation {
    createTool(name: String!, notes: String, use: String): Tool!
    updateTool(id: ID!, name: String, notes: String, use: String): Tool!
    deleteTool(id: ID!): Tool!
    restoreTool(id: ID!): Tool!
    removeTool(id: ID!): Tool!
  }
`;
