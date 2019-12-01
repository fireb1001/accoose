import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true
  },
  passhint: {
    type: String,
    required: true
  },
  site: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "site"
  },
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "project"
    }
  ],
  domains: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "domain"
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
accountSchema.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: true
});
const account = mongoose.model("account", accountSchema);

export default account;
