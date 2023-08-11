import express from "express";
const router = express.Router();

// import controllers
import * as userController from "../controllers/userControllers.js";

router.route('/users').post(userController.createUser);

export default router