import accountSchema from "./accountSchema";
import siteSchema from "./siteSchema";
import { gql } from "apollo-server";
import domainSchema from "./domainSchema";
import projectSchema from "./projectSchema";
import tagSchema from "./tagSchema";
import toolSchema from "./toolSchema";

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [
  linkSchema,
  accountSchema,
  siteSchema,
  domainSchema,
  projectSchema,
  toolSchema,
  tagSchema
];
