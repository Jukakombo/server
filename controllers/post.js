import mongoose from "mongoose";
import PostModel from "../models/post.js";
// getPost
export const getPosts = async (req, res) => {
  const allPosts = await PostModel.find();
  try {
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// create post
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostModel(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(209).json({ message: error.message });
  }
};

// update posts
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post if found with such id");
  const updatedPost = await PostModel.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json(updatedPost);
};

// delete post
export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post found with such id");
  await PostModel.findByIdAndRemove(_id);
  res.send("Post was successfully deleted");
};

export const likePost = async (req, res) => {
  const { id: _id} = req.params;

  if (!req.userId) return res.json({ message: "Unauthentication" });

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`no post is found with this id=${id}`);

  const post = await PostModel.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    // like the post
    post.likes.push(req.userId);
  } else {
    // dislike or delete the post
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

const updatedPost = await PostModel.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updatedPost);
};
