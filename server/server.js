import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import { connect } from "mongoose";
import connectDB from './config/mongodb.js'
import authRouter from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000
connectDB();

// const allowedOrigins = ['http://localhost:5173']
const allowedOrigins = ['https://mern-auth-frontend-4c9m.onrender.com']

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://mern-auth-frontend-4c9m.onrender.com",
    credentials: true,
  })
);



app.get('/', (req,res)=> res.send("API Working"));
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)


app.listen(port, ()=>console.log(`Server started on PORT:${port}`));