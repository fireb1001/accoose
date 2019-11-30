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
      { name, notes, accounts },
      { models: { projectModel } },
      info
    ) => {
      return await projectModel.create({ name, notes, accounts });
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
    accounts: async (
      { accounts },
      args,
      { models: { accountModel } },
      info
    ) => {
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
      console.log(ret_accounts);
      return ret_accounts;
    }
  }
};
