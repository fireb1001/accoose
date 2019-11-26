import accountSchema from "./accountSchema";
import siteSchema from "./siteSchema";
import { gql } from "apollo-server";

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, accountSchema, siteSchema];
