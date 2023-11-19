<script setup>
import QuizForm from "../components/Form.vue";
import Preview from "../components/Preview.vue";
import { useFormStore } from "@/stores/formStore";
const formStore = useFormStore(); // Access the Pinia store

// Subscribe to changes in the form store and update local data
const singleQuestion = formStore.formQuestion;
</script>

<template>
  <main class="flex py-10 min-h-[400px]">
    <!-- Left side Form Component -->
    <div class="w-6/12 border-r border-blue-900">
      <h1 class="text-center text-xl mb-3 font-bold">Quiz Form</h1>
      <QuizForm />
    </div>

    <!-- Right side Preview Component -->
    <div class="w-6/12">
      <h1 class="text-center text-xl mb-3 font-bold">Form Preview</h1>
      <Preview :question="singleQuestion" />
    </div>
  </main>
</template>
