const express = require("express");
const {
  getPost,
  deletePost,
  editPost,
  getPosts,
  addPost,
} = require("../conrtollers/api-post-controller");

const router = express.Router();
// получение всех постов  всюду добавляем api
router.get("/api/posts", getPosts);
// добавление нового поста
router.post("/api/post", addPost); // скоректоровали путь был add-post
// получение поста по id
router.get("/api/post/:id", getPost); // был posts/:id
// удаление поста по id
router.delete("/api/post/:id", deletePost); // был posts/:id
// редактирование поста по id
router.put("/api/post/:id", editPost);

module.exports = router;
