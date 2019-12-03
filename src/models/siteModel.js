import mongoose from "mongoose";

const siteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true
  },
  logoUrl: {
    type: String,
    required: false
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
/*
siteSchema.pre('save', function() {
  const hashedPassword = bcrypt.hashSync(this.password, 12);
  this.password = hashedPassword;

});
 */
const site = mongoose.model("site", siteSchema);
var mongoose_delete = require("mongoose-delete");

siteSchema.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: true
});
export default site;
