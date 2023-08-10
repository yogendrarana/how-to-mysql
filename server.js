import path from "path";
import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import ErrorMiddleware from "./middlewares/errorMiddleware.js";


// import routes
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

const app = new express();


// __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


// set view engine
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, './public')));


// dot env
dotenv.config({path: '.env'})


// middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))


app.listen(process.env.PORT, () => {
    console.log('Server listening on port 8000')
})


// routes
app.use('/api/v1', userRoutes);
app.use('/api/v1', postRoutes);


// error middleware
app.use(ErrorMiddleware)