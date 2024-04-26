const Post = require("../models/post");
const createPath = require("../helpers/create-path");

const handlerError = (res, error) => {
  console.log(error);
  res.render(createPath("error"), { title: "Error" });
};

const getPost = (req, res) => {
  const title = "Post";
  console.log(req.params);
  Post.findById(req.params.id)
    .then((post) => res.render(createPath("post"), { title, post }))
    .catch((error) => handlerError(res, error));
};

const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => handlerError(res, error));
};

const getEditPost = (req, res) => {
  const title = "Edit Post";
  Post.findById(req.params.id)
    .then((post) => res.render(createPath("edit-post"), { title, post }))
    .catch((error) => handlerError(res, error));
};

const editPost = (req, res) => {
  const { title, author, text } = req.body;
  const { id } = req.params;
  Post.findByIdAndUpdate(id, { title, author, text })
    .then((result) => res.redirect(`/posts/${id}`))
    .catch((error) => handlerError(res, error));
};

const getPosts = (req, res) => {
  const title = "Posts";
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => res.render(createPath("posts"), { title, posts }))
    .catch((error) => handlerError(res, error));
};

const getAddPost = (req, res) => {
  const title = "Add Post";
  res.render(createPath("add-post"), { title });
};

const addPost = (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, text, author });
  post
    .save()
    .then((result) => res.redirect("/posts"))
    .catch((error) => handlerError(res, error));
};

module.exports = {
  getPost,
  deletePost,
  getEditPost,
  editPost,
  getPosts,
  getAddPost,
  addPost,
};
