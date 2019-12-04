import mongoose from "mongoose";

const toolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  use: {
    type: String,
    required: false
  },
  notes: {
    type: String,
    required: false
  }
});

var mongoose_delete = require("mongoose-delete");

toolSchema.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: true
});

export default mongoose.model("tool", toolSchema);
