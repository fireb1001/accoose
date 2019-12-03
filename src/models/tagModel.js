import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  hashtag: {
    type: String,
    required: true,
    unique: true
  },
  notes: {
    type: String,
    required: false
  }
});

var mongoose_delete = require("mongoose-delete");

tagSchema.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: true
});

export default mongoose.model("tag", tagSchema);
