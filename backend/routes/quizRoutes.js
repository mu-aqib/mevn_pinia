import express from "express";
import { createQuiz, getAllQuestions } from "../controllers/quizcontroller.js";

const router = express.Router();

router.post("/add", createQuiz);
router.get("/getAll", getAllQuestions);

export default router;
