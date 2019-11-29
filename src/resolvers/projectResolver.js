export default {
  Query: {
    project: async (parent, { id }, { models: { projectModel } }, info) => {
      return await projectModel.findById({ _id: id }).exec();
    },
    projects: async (parent, args, { models: { projectModel } }, info) => {
      return await projectModel.find({}).exec();
    }
  },
  Mutation: {
    createProject: async (
      parent,
      { name, notes },
      { models: { projectModel } },
      info
    ) => {
      return await projectModel.create({ name, notes });
    },
    updateProject: async (
      parent,
      { id, name, notes },
      { models: { projectModel } },
      info
    ) => {
      let willUpdate = {
        ...(name ? { name: name } : {}),
        ...(notes ? { notes: notes } : {})
      };
      return projectModel.findByIdAndUpdate(id, willUpdate, { new: true });
    }
  },
  Project: {}
};
