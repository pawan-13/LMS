import express from 'express';
import connectDB from './db/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';

dotenv.config({});

connectDB();
const port = 3000;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

// Api Called
app.use("/api/v1/user", userRoute);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});