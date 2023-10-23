import pool from "../config/db.js";
import ErrorHandler from "../util/errorHandler.js";
import { catchAsyncError } from "../util/catchAsyncError.js";

export const registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password) return next(new ErrorHandler('Please fill all fields', 400));

    const [rows] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
    const user = rows[0];
    if(user) return next(new ErrorHandler('User already exists', 400));

    const [result] = await pool.query('INSERT INTO user (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
    
    res.status(201).json({ 
        success: true, 
        message: 'User created', 
        userId: result.insertId 
    });
});


export const loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password) return next(new ErrorHandler('Please fill all fields', 400));

    const [result] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
    const user = result[0];
    if(!user) return next(new ErrorHandler('Invalid credentials', 401));

    const isMatch = user.password === password;
    if(!isMatch) return next(new ErrorHandler('Invalid credentials', 401));

    res.status(200).json({ 
        success: true, 
        message: 'User logged in', 
        userId: user.id 
    });
});