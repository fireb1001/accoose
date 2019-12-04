export default {
  Query: {
    tool: async (parent, { id }, { models: { toolModel } }, info) => {
      const tool = await toolModel.findById({ _id: id }).exec();
      return tool;
    },
    tools: async (parent, args, { models: { toolModel } }, info) => {
      return await toolModel.find({}).exec();
    }
  },
  Mutation: {
    createTool: async (
      parent,
      { name, notes, use },
      { models: { toolModel } },
      info
    ) => {
      const tool = await toolModel.create({ name, notes, use });
      console.log(tool);
      return tool;
    },
    deleteTool: async (parent, { id }, { models: { toolModel } }, info) => {
      await toolModel.deleteById(id);
      let del_item = await toolModel.findOneWithDeleted({ _id: id });
      // console.log("del_item", del_item);
      return del_item;
    },
    restoreTool: async (parent, { id }, { models: { toolModel } }, info) => {
      await toolModel.restore({ _id: id });
      return await toolModel.findOne({ _id: id });
    },
    removeTool: async (parent, { id }, { models: { toolModel } }, info) => {
      return await toolModel.findByIdAndRemove(id);
    }
  }
};
