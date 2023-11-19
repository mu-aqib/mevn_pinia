<template>
  <h1 class="text-center text-3xl mb-3 font-bold">Quiz</h1>

  <div
    class="w-10/12 mx-auto bg-white p-8 rounded-lg shadow-lg"
    v-if="!loading"
  >
    <!-- <div v-for="(mcqs, i) in questions" :key="i"> -->
    <div v-if="indx < questions.length">
      <Preview :question="questions[indx]" @updateOption="updateOption" />

      <div class="mt-6 flow-root">
        <button
          @click="nextQuestion"
          v-show="selectedAnswer != '' && indx < questions.length - 1"
          class="float-right bg-blue-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
        >
          Next &gt;
        </button>
        <button
          @click="showResults"
          v-show="indx == questions.length - 1"
          class="float-right bg-blue-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
        >
          Finish
        </button>
      </div>
    </div>
    <div v-else>
      <h2 class="text-bold text-3xl">Results</h2>
      <div class="flex justify-start space-x-4 mt-6">
        <p>
          Correct Answers:
          <span class="text-2xl text-green-700 font-bold">{{
            correctAnswers
          }}</span>
        </p>
        <p>
          Wrong Answers:
          <span class="text-2xl text-red-700 font-bold">{{
            wrongAnswers
          }}</span>
        </p>
      </div>
      <div class="mt-6 flow-root">
        <button
          @click="resetQuiz"
          class="float-right bg-blue-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
        >
          Play again
        </button>
      </div>
    </div>
  </div>
  <h1 v-else>Loading...</h1>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useFormStore } from "@/stores/formStore";
import Preview from "../components/Preview.vue";
const formStore = useFormStore();

// Use a reactive reference to store the questions
const questions = ref([]);
const indx = ref(0);
const selectedAnswer = ref("");
const correctAnswers = ref(0);
const wrongAnswers = ref(0);
const loading = ref(true);

// Fetch questions on component mount
onMounted(async () => {
  await formStore.fetchAllQuestions(); //call action to get data
  loading.value = false;
  questions.value = formStore.getAllQuestion; // call getter to get data
});

//--------- METHODS  ------------//
const updateOption = (obj) => {
  console.log(obj.isTrue);
  selectedAnswer.value = obj.value;
  if (obj.isTrue) {
    correctAnswers.value++;
  } else {
    wrongAnswers.value++;
  }
};

const nextQuestion = () => {
  indx.value++;
  selectedAnswer.value = "";
};

const showResults = () => indx.value++;

const resetQuiz = () => {
  indx.value = 0;
  selectedAnswer.value = "";
  correctAnswers.value = 0;
  wrongAnswers.value = 0;
};
</script>
