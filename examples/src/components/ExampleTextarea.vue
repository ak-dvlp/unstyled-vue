<script setup lang="ts">
const model = defineModel<string | number | null>()

const classes =
  // #region example-textarea-classes
  'text-my-label bg-my-body-background selection:bg-my-label selection:text-my-body-background w-full rounded-lg px-4 py-2.5 transition-all duration-150 outline-none hover:ring focus:ring'
// #endregion example-textarea-classes
</script>

<template>
  <BaseTextarea v-model="model" :class="classes" />
</template>
