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
  ]
});

const account = mongoose.model("account", accountSchema);

export default account;
