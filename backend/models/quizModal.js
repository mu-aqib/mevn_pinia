import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  isTrue: {
    type: Boolean,
    required: true,
  },
});

const quizSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    options: {
      type: [optionSchema], // Using optionSchema for the options array
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
