<template>
  <div class="w-11/12 mx-auto">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="question"
        >
          Question
        </label>
        <textarea
          v-model="formQuestion.text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name=""
          id=""
          rows="3"
        ></textarea>
      </div>
      <hr class="my-5" />

      <!-- Options -->
      <div class="mb-4">
        <div class="flex justify-between mb-3">
          <h3 class="text-lg font-bold">Options</h3>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline text-xs py-2 px-4"
            type="button"
            @click="addOption"
          >
            Add new option
          </button>
        </div>

        <!-- each options -->
        <Options
          v-for="(option, index) in formQuestion.options"
          :key="index"
          :option="option"
          :radioGroupName="'radioGroup'"
          @deleteOption="removeOption(index)"
        />
      </div>

      <div class="flex items-center justify-between">
        <button
          @click.prevent="submitData"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Options from "./Options.vue";
import { useFormStore } from "@/stores/formStore";

const formStore = useFormStore();

//---------- METHODS   ----------------//
const addOption = () => formStore.addOption();

const removeOption = (index) => formStore.removeOption(index);

const formQuestion = formStore.formQuestion;

const submitData = async () => {
  try {
    await formStore.addQuestion();
    alert("Data Added Successfuly");
    formStore.resetForm();
  } catch (err) {
    console.log("Unable to submit data " + err.message);
  }
};
</script>
