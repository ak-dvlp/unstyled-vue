<script setup lang="ts">
import UserSwitch from '@examples/src/user-components/UserSwitch.vue'
import { reactive } from 'vue'

const state = reactive({
  model: '',
  disabled: false,
  error: false,
})

// const cols = computed((): Record<string, string>[] => [
//   { key: 'name', width: '80px' }, // Strict fixed tracking
//   { key: 'type', width: '180px' }, // Strict fixed tracking
//   { key: 'default', width: '20%' },
//   { key: 'description_ru', width: '80%' }, // Takes all remaining space
// ])

// const rows = [{ description_en: '', description_ru: '', isOptional: false, name: 'cols', type: 'TableCol<T>[]' }]

// const headers = computed(() => ['Имя свойства', 'Тип свойства', 'Значение по умолчанию', 'Описание'])
</script>

<template>
  <div class="flex flex-col">
    <!-- <BaseTable class="test" :cols :headers :rows="rows">
      <template #name="{ row, value }">
        {{ value }}
        <span v-if="!row.isOptional" class="text-required">*</span>
      </template>

      <template #default="{ value }">
        {{ value === undefined ? 'undefined' : value }}
      </template>

      <template #empty>Свойство не найдено</template>
    </BaseTable> -->
    <BaseCheckbox />

    <UserSwitch v-model="state.disabled" label="disabled" />
    <UserSwitch v-model="state.error" label="error" />

    <UserSwitch v-model="state.model" :disabled="state.disabled" :error="state.error" label="UserSwitch" />
  </div>
</template>
