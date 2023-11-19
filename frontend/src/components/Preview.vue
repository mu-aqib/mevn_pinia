<template>
  <div class="w-10/12 mx-auto">
    <div class="w-full">
      <div class="bg-white p-12 rounded-lg shadow-lg w-full">
        <div>
          <p class="text-lg font-bold">
            {{ question.text }}
          </p>
          <template
            v-if="question && question.options && question.options.length > 0"
          >
            <label
              v-for="(answer, index) in question.options"
              :key="index"
              :for="`answer_${index}`"
              class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg hover:bg-gray-200 cursor-pointer"
              :class="isTestedPage ? getClass(answer) : ''"
            >
              <input
                :id="`answer_${index}`"
                type="checkbox"
                class="hidden"
                :value="answer.isTrue"
                @change.once="selectAnswer(answer)"
              />
              {{ answer.value ? answer.value : "" }}
            </label></template
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref } from "vue";
const emits = defineEmits(["updateOption"]); // Define emitted event
const props = defineProps({
  question: {
    type: Object,
    default: () => {
      return {
        text: "---Defualt Text--- ?",
        options: {
          value: "---default Option---",
          isTrue: false,
        },
      };
    },
  },

  isTestedPage: {
    type: Boolean,
    default: false,
  },
});
const selectedAnswer = ref(""); // Track selected answer

const selectAnswer = (value) => {
  selectedAnswer.value = value.value; // Update the selected answer
  emits("updateOption", value); // Emit the selected answer to the parent component
};

const getClass = (answer) => {
  if (answer.value === selectedAnswer.value && answer.isTrue) {
    return "bg-green-200"; // Correct answer selected
  } else if (answer.value === selectedAnswer.value && !answer.isTrue) {
    return "bg-red-200"; // Wrong answer selected
  }
  return "";
};
</script>
