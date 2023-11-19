import express from "express";
import cors from "cors"; //used for cross browser origin issue
import quizRoute from "./routes/quizRoutes.js";

import connectDB from "./config/db.js";
import { get } from "mongoose";

const PORT = 5000;
connectDB();
const app = express();
app.use(cors());
// For URL-encoded and parsing JSON data in the request body.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api for different category routes.
app.use("/api/quiz", quizRoute);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
