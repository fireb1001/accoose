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
    },
    deleteTag: async (parent, { id }, { models: { tagModel } }, info) => {
      await tagModel.deleteById(id);
      let del_item = await tagModel.findOneWithDeleted({ _id: id });
      // console.log("del_item", del_item);
      return del_item;
    },
    restoreTag: async (parent, { id }, { models: { tagModel } }, info) => {
      await tagModel.restore({ _id: id });
      return await tagModel.findOne({ _id: id });
    },
    removeTag: async (parent, { id }, { models: { tagModel } }, info) => {
      return await tagModel.findByIdAndRemove(id);
    }
  }
};
