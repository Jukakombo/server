import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
import userRouter from "./routes/users.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use("/posts", postRoutes);
app.use("/user", userRouter);
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Your app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
