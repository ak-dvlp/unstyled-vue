<script setup lang="ts">
const classes =
  // #region example-input-classes
  'text-my-label bg-my-body-background selection:bg-my-label selection:text-my-body-background rounded-lg px-4 py-2.5 transition-all duration-150 outline-none hover:ring focus:ring'
// #endregion example-input-classes
</script>

<template>
  <BaseInput :class="classes" />
</template>
