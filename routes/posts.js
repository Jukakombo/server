import express from "express";
import auth from "../middleware/auth.js"
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/post.js";

const postRoutes = express.Router();
 
postRoutes.get("/", getPosts);
postRoutes.post("/", createPost);
postRoutes.patch("/:id", updatePost);
postRoutes.delete("/:id", deletePost);
// postRoutes.patch("/:id/likePost", auth, likePost);
export default postRoutes;
