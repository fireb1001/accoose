import mongoose from "mongoose";

const domainSchema = new mongoose.Schema({
  domain: {
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
  ],
  site: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "site"
  }
});

const domain = mongoose.model("domain", domainSchema);

export default domain;
