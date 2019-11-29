import { gql } from "apollo-server";

export default gql`
  type Domain {
    id: ID!
    domain: String!
    notes: String
    site: Site
  }

  extend type Query {
    domain(id: ID!): Domain!
    domains: [Domain!]!
  }

  extend type Mutation {
    createDomain(domain: String!, notes: String, site: ID): Domain!
  }
`;
