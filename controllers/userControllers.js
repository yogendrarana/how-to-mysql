import pool from "../config/db.js";
import { catchAsyncError } from "../util/catchAsyncError.js";

export const createUser = catchAsyncError(async (req, res, next) => {
    const {name, email, password} = req.body;
        const [result] = await pool.query('INSERT INTO user (name, email, password) VALUES (?, ?, ?)', [name, email, password]);

        res.json({ success: true, message: 'User created', userId: result.insertId });
    }
);