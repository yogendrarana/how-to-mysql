import express from "express";

const router = express.Router();

router.route('/users').post(() => {
    console.log('user created')
}) 

export default router