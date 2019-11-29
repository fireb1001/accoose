export default {
  Query: {
    site: async (parent, { id }, { models: { siteModel } }, info) => {
      const user = await siteModel.findById({ _id: id }).exec();
      return user;
    },
    sites: async (parent, args, { models: { siteModel } }, info) => {
      const sites = await siteModel.find({}).exec();
      return sites;
    }
  },
  Mutation: {
    createSite: async (
      parent,
      { name, url, logoUrl },
      { models: { siteModel } },
      info
    ) => {
      const site = await siteModel.create({ name, url, logoUrl });
      return site;
    },
    updateSite: async (
      parent,
      { id, name, url, logoUrl },
      { models: { siteModel } },
      info
    ) => {
      let willUpdate = {
        ...(name ? { name: name } : {}),
        ...(url ? { url: url } : {}),
        ...(logoUrl ? { logoUrl: logoUrl } : {})
      };
      const site = siteModel.findByIdAndUpdate(id, willUpdate, { new: true });
      return site;
    }
  },
  Site: {
    accounts: async ({ id }, args, { models: { accountModel } }, info) => {
      const accounts = await accountModel.find({ site: id }).exec();
      return accounts;
    }
  }
};
