import express from "express";

const router = express.Router();

router.route('/posts').post(() => {
    console.log('post created')
}) 

export default router