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
    },
    updateAccount: async (
      parent,
      { id, login, passhint, site, tags },
      { models: { accountModel } },
      info
    ) => {
      let willUpdate = {
        ...(login ? { login: login } : {}),
        ...(passhint ? { passhint: passhint } : {}),
        ...(site ? { site: site } : {}),
        ...(tags ? { tags: tags } : [])
      };
      // console.log(willUpdate);
      return await accountModel.findByIdAndUpdate(id, willUpdate, {
        new: true
      });
    },
    deleteAccount: async (
      parent,
      { id },
      { models: { accountModel } },
      info
    ) => {
      await accountModel.deleteById(id);
      let del_acc = await accountModel.findOneWithDeleted({ _id: id });
      // console.log("del_acc", del_acc);
      return del_acc;
    },
    restoreAccount: async (
      parent,
      { id },
      { models: { accountModel } },
      info
    ) => {
      await accountModel.restore({ _id: id });
      return await accountModel.findOne({ _id: id });
    },
    removeAccount: async (
      parent,
      { id },
      { models: { accountModel } },
      info
    ) => {
      return await accountModel.findByIdAndRemove(id);
    }
  },
  Account: {
    site: async (params, args, { models: { siteModel } }, info) => {
      // console.log(params.site);
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
    },
    tags: async ({ tags }, args, { models: { tagModel } }, info) => {
      return await tagModel
        .find()
        .where("_id")
        .in(tags)
        .exec();
    }
  }
};
