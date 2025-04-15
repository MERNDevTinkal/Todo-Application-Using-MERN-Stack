import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/Database.js";
import userRouter from "./routes/userRouter.js";
import todoRouter from "./routes/todoRouter.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

dotenv.config();

connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true, 
  })
);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/todo", todoRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});