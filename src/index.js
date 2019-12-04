import schemas from "./schemas";
import resolvers from "./resolvers";
import accountModel from "./models/accountModel";
import siteModel from "./models/siteModel";
import domainModel from "./models/domainModel";
import projectModel from "./models/projectModel";
import tagModel from "./models/tagModel";
import toolModel from "./models/toolModel";

const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const PORT = process.env.PORT || 4000;

//const typeDefs = require("./typeDefs");

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: async ({ req }) => {
    if (req) {
      return {
        models: {
          accountModel,
          siteModel,
          domainModel,
          projectModel,
          tagModel,
          toolModel
        }
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
