<script setup lang="ts">
import UserSwitch from '@examples/src/user-components/UserSwitch.vue'
import { reactive, ref } from 'vue'

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
const tst = ref(false)

const flag = ref(false)

const trueValue = ref(true)
const falseValue = ref(false)

function changeSome() {
  if (flag.value) {
    flag.value = false
    trueValue.value = 'истина'
    falseValue.value = 'ложь'
  } else {
    flag.value = true
    trueValue.value = true
    falseValue.value = false
  }
}
</script>

<template>
  <button @click="changeSome">Нажать</button>
  {{ trueValue }} {{ falseValue }}
  <div>{{ tst }}</div>
  <BaseSwitch v-model="tst" :false-value="falseValue" indeterminate :true-value="trueValue" />
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

    <UserSwitch v-model="state.disabled" label="disabled" />
    <UserSwitch v-model="state.error" label="error" />

    <UserSwitch v-model="state.model" :disabled="state.disabled" :error="state.error" label="UserSwitch" />
  </div>
</template>
