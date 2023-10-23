import express from "express";
const router = express.Router();

// import controllers
import * as authControllers from "../controllers/authControllers.js";

router.route('/auth/login').post(authControllers.loginUser);
router.route('/auth/register').post(authControllers.registerUser);

export default router;