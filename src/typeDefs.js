const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;
// use normal node syntax
module.exports = typeDefs;
