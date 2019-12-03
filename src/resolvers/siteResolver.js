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
    },
    deleteSite: async (parent, { id }, { models: { siteModel } }, info) => {
      await siteModel.deleteById(id);
      let del_item = await siteModel.findOneWithDeleted({ _id: id });
      // console.log("del_item", del_item);
      return del_item;
    },
    restoreSite: async (parent, { id }, { models: { siteModel } }, info) => {
      await siteModel.restore({ _id: id });
      return await siteModel.findOne({ _id: id });
    },
    removeSite: async (parent, { id }, { models: { siteModel } }, info) => {
      return await siteModel.findByIdAndRemove(id);
    }
  },
  Site: {
    accounts: async ({ id }, args, { models: { accountModel } }, info) => {
      const accounts = await accountModel.find({ site: id }).exec();
      return accounts;
    }
  }
};
