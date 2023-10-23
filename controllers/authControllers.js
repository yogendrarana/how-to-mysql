import pool from "../config/db/pool.js";
import User from "../models/userModel.js";
import ErrorHandler from "../util/errorHandler.js";
import { catchAsyncError } from "../util/catchAsyncError.js";


// instantiate the User class
const user = new User(pool);

// route handlers
export const registerUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password) return next(new ErrorHandler('Please fill all fields', 400));

    const userExists = await user.getUserByEmail(email);
    if(userExists) return next(new ErrorHandler('User already exists', 400));

    const [result] = await user.createUser(email, password);
    
    res.status(201).json({ 
        success: true, 
        message: 'User created', 
        userId: result.insertId 
    });
});


export const loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password) return next(new ErrorHandler('Please fill all fields', 400));

    const userExists = await user.getUserByEmail(email);
    if(!userExists) return next(new ErrorHandler('Invalid credentials', 401));

    const isMatch = userExists.password === password;
    if(!isMatch) return next(new ErrorHandler('Invalid credentials', 401));

    res.status(200).json({ 
        success: true, 
        message: 'User logged in', 
        userId: user.id 
    });
});