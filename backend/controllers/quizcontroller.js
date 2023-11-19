import Quiz from "../models/quizModal.js";

// ------------ ADD NEWCAR  ------------------  //
const createQuiz = async (req, res) => {
  try {
    const quiz = req.body;

    // Add document in DB
    const newQuiz = await Quiz.create(quiz);
    res.status(200).json(newQuiz);
  } catch (err) {
    res.status(400).json({ error: "Failed to get cars. " + err.message });
  }
};

// -----------  GET ALL Quiz Questions   ------------------ //
const getAllQuestions = async (req, res) => {
  try {
    const cars = await Quiz.find().populate();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ error: "Failed to get cars. " + err.message });
  }
};

export { createQuiz, getAllQuestions };
