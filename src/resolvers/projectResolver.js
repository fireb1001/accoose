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
      { id, name, notes, accounts },
      { models: { projectModel } },
      info
    ) => {
      let willUpdate = {
        ...(name ? { name: name } : {}),
        ...(notes ? { notes: notes } : {}),
        ...(accounts ? { accounts: accounts } : [])
      };
      console.log(willUpdate);
      return projectModel.findByIdAndUpdate(id, willUpdate, { new: true });
    }
  },
  Project: {
    accounts: async ({ id }, args, { models: { accountModel } }, info) => {
      let accounts = await accountModel.find({ project: id }).exec();
      console.log(accounts);
      return accounts;
    }
  }
};
