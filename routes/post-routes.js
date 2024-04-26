const express = require("express");
const {
  getPost,
  deletePost,
  getEditPost,
  editPost,
  getPosts,
  getAddPost,
  addPost,
} = require("../conrtollers/post-controller");

const router = express.Router();

router.post("/add-post", addPost);
router.get("/add-post", getAddPost);
router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.get("/edit/:id", getEditPost);
router.put("/edit/:id", editPost);
router.delete("/posts/:id", deletePost);

module.exports = router;
