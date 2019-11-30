export default {
  Query: {
    account: async (parent, { id }, { models: { accountModel } }, info) => {
      const account = await accountModel.findById({ _id: id }).exec();
      return account;
    },
    accounts: async (parent, args, { models: { accountModel } }, info) => {
      return await accountModel.find({}).exec();
    }
  },
  Mutation: {
    createAccount: async (
      parent,
      { login, passhint, site },
      { models: { accountModel } },
      info
    ) => {
      const account = await accountModel.create({ login, passhint, site });
      return account;
    }
  },
  Account: {
    site: async (params, args, { models: { siteModel } }, info) => {
      console.log(params.site);
      if (params.site)
        return await siteModel.findById({ _id: params.site }).exec();
      else return null;
    },
    projects: async ({ id }, args, { models: { projectModel } }, info) => {
      let projects = await projectModel.find({ accounts: id }).exec();
      return projects;
    },
    domains: async ({ id }, args, { models: { domainModel } }, info) => {
      let domains = await domainModel.find({ accounts: id }).exec();
      return domains;
    }
  }
};
