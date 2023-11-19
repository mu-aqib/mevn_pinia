<template>
  <div class="flex items-start border-8 border-blue-200 p-3 rounded-lg mb-3">
    <input
      v-model="option.value"
      class="w-7/12 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
      type="text"
      placeholder="enter option value"
    />

    <div class="ml-4">
      <input
        v-model="option.isTrue"
        type="checkbox"
        name="selectType"
        class="cursor:pointer"
        :value="option.isTrue"
      />
      <label class="text-gray-700 text-sm" for="istrue"> Is true </label>
    </div>

    <a
      href="#"
      @click="$emit('deleteOption')"
      class="bg-[#590000eb] p-1 rounded-lg ml-auto"
    >
      <img src="@/assets/icons/delete.svg" alt="delete" class="w-5" />
    </a>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  option: {
    type: Object,
    default: () => ({ value: "", isTrue: false }),
  },
});
</script>
