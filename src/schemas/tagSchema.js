import { gql } from "apollo-server";

export default gql`
  type Tag {
    id: ID!
    hashtag: String!
    notes: String
  }

  extend type Query {
    tag(id: ID!): Tag!
    tags: [Tag!]!
  }

  extend type Mutation {
    createTag(hashtag: String!, notes: String): Tag!
    updateTag(id: ID!, hashtag: String, notes: String): Tag!
    deleteTag(id: ID!): Tag!
    restoreTag(id: ID!): Tag!
    removeTag(id: ID!): Tag!
  }
`;
