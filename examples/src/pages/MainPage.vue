<script setup lang="ts">
import { ref } from 'vue'

import ExampleSwitch from '../components/ExampleSwitch.vue'

const md = ref(false)
</script>

<template>
  <h3>Главная страница</h3>
  <div>{{ md }}</div>
  <ExampleSwitch v-model="md" label="Тест" />
</template>
