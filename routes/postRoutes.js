import express from "express";
const router = express.Router();

// import controllers
import * as postController from "../controllers/postControllers.js";

router.route('/posts').post(postController.createPost) 

export default router