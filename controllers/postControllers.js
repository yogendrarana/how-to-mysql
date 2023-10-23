import pool from "../config/db.js";
import Post from "../models/postModel.js";
import { catchAsyncError } from "../util/catchAsyncError.js";

export const createPost = catchAsyncError(async (req, res, next) => {
    const {email, password} = req.body;

    res.json({success: true, message: 'Post created'})
})