export default {
  Query: {
    domain: async (parent, { id }, { models: { domainModel } }, info) => {
      return await domainModel.findById({ _id: id }).exec();
    },
    domains: async (parent, args, { models: { domainModel } }, info) => {
      return await domainModel.find({}).exec();
    }
  },
  Mutation: {
    createDomain: async (
      parent,
      { domain, notes, site, accounts },
      { models: { domainModel } },
      info
    ) => {
      return await domainModel.create({ domain, notes, site, accounts });
    },
    updateDomain: async (
      parent,
      { id, domain, notes, site, accounts },
      { models: { domainModel } },
      info
    ) => {
      let willUpdate = {
        ...(domain ? { name: domain } : {}),
        ...(notes ? { notes: notes } : {}),
        ...(site ? { site: site } : {}),
        ...(accounts ? { accounts: accounts } : [])
      };
      // console.log(willUpdate);
      return domainModel.findByIdAndUpdate(id, willUpdate, { new: true });
    }
  },
  Domain: {
    site: async (params, args, { models: { siteModel } }, info) => {
      if (params.site)
        return await siteModel.findById({ _id: params.site }).exec();
      else return null;
    },
    accounts: async (
      { accounts },
      args,
      { models: { accountModel } },
      info
    ) => {
      //console.log(accounts);
      let ret_accounts;
      try {
        ret_accounts = await accountModel
          .find()
          .where("_id")
          .in(accounts)
          .exec();
      } catch (error) {
        console.error(error);
      }
      //console.log(ret_accounts);
      return ret_accounts;
    }
  }
};
