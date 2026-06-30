<script lang="ts" setup>
import UserField from '@examples/src/user-components/UserField.vue'

import { ref } from 'vue'

const md = ref('3')
</script>

<template>
  Модель {{ md }}
  <UserField v-model="md" />
</template>
