//import express
const express = require('express');
//import the controller
const { fetchPost, editPost, deletePost } = require("../controllers/post.controller");

const postRouter = express.Router();

//create the endpoints
// postRouter.get("/", fetchPost);
postRouter.put("/:id", editPost);
postRouter.delete("/:id", deletePost);

module.exports = postRouter;