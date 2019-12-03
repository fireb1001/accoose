import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  notes: {
    type: String
  },
  accounts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "account"
    }
  ],
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tag"
    }
  ]
});

var mongoose_delete = require("mongoose-delete");

projectSchema.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: true
});

export default mongoose.model("project", projectSchema);
