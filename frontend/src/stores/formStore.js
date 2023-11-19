import { defineStore } from "pinia";
import api from "../utils/axios";

export const useFormStore = defineStore("form", {
  state: () => ({
    formQuestion: {
      text: "Question text here ?",
      options: [
        {
          value: "option 1",
          isTrue: false,
        },
        {
          value: "option 2",
          isTrue: true,
        },
      ],
    },
    allQuestion: undefined,
  }),

  getters: {
    getAllQuestion() {
      return this.allQuestion;
    },
  },

  actions: {
    setFormText(newText) {
      this.formQuestion.text = newText;
    },

    addOption() {
      const option = {
        value: "",
        isTrue: false,
      };
      this.formQuestion.options.push(option);
    },

    removeOption(index) {
      this.formQuestion.options.splice(index, 1);
    },

    resetForm() {
      console.log("REeset form called");
      this.formQuestion = {
        text: "Question text here ?",
        options: [
          {
            value: "option 1",
            isTrue: false,
          },
          {
            value: "option 2",
            isTrue: true,
          },
        ],
      };
    },

    async fetchAllQuestions() {
      const { data } = await api.get("api/quiz/getAll");

      if (data) {
        this.allQuestion = data;
      } else {
        this.allQuestion = undefined;
      }
    },

    async addQuestion() {
      const { data } = await api.post("api/quiz/add", {
        ...this.formQuestion,
      });
    },
  },
});
