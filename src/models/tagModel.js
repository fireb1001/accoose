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

const tag = mongoose.model("tag", tagSchema);

export default tag;
