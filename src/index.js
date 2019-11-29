import schemas from "./schemas";
import resolvers from "./resolvers";
import accountModel from "./models/accountModel";
import siteModel from "./models/siteModel";
import domainModel from "./models/domainModel";

const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const PORT = process.env.PORT || 4000;

//const typeDefs = require("./typeDefs");
// Construct a schema, using GraphQL schema language

// Provide resolver functions for your schema fields
/*
const resolvers = {
  Query: {
    //hello: (root, args, context) => "Hello هيخيوخيو!"
    accounts: async (parent, args, { models: { accountModel } }, info) => {
      const accounts = await accountModel.find({}).exec();
      console.log(accounts);
      return accounts;
    },
    account: async (parent, { id }, { models: { accountModel } }, info) => {
      const account = await accountModel.findById({ _id: id }).exec();
      return account;
    },
    sites: async (parent, args, { models: { siteModel } }, info) => {
      const sites = await siteModel.find({}).exec();
      console.log(sites);
      return sites;
    }
  },
  Mutation: {
    createAccount: async (
      parent,
      { login, passhint },
      { models: { accountModel } },
      info
    ) => {
      const account = await accountModel.create({ login, passhint });
      return account;
    },
    createSite: async (
      parent,
      { name, url, logoUrl },
      { models: { siteModel } },
      info
    ) => {
      const site = await siteModel.create({ name, url, logoUrl });
      return site;
    }
  }
};

*/

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: async ({ req }) => {
    if (req) {
      return {
        models: { accountModel, siteModel, domainModel }
      };
    }
  },
  introspection: true,
  playground: true
});

server.listen(PORT).then(({ url }) => {
  mongoose.connect(
    "mongodb+srv://fireb1001:4261179m9@cluster0-msfvo.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
  console.log(`🚀 Server ready at ${url}`);
});
