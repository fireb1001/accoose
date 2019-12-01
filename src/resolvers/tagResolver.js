export default {
  Query: {
    tag: async (parent, { id }, { models: { tagModel } }, info) => {
      const tag = await tagModel.findById({ _id: id }).exec();
      return tag;
    },
    tags: async (parent, args, { models: { tagModel } }, info) => {
      return await tagModel.find({}).exec();
    }
  },
  Mutation: {
    createTag: async (
      parent,
      { hashtag, notes },
      { models: { tagModel } },
      info
    ) => {
      const tag = await tagModel.create({ hashtag, notes });
      console.log(tag);
      return tag;
    }
  }
};
