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
      { domain, notes, site },
      { models: { domainModel } },
      info
    ) => {
      return await domainModel.create({ domain, notes, site });
    }
  },
  Domain: {
    site: async (params, args, { models: { siteModel } }, info) => {
      if (params.site)
        return await siteModel.findById({ _id: params.site }).exec();
      else return null;
    }
  }
};
