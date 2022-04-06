import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  name: String,
  title: String,
  email: String,
  image: String,
  advice: String,
  likes: { type: [String], default: [] },
  createdAt: { type: Date, default: new Date() },
});

const PostModel = mongoose.model("PostModel", postSchema);
export default PostModel;
