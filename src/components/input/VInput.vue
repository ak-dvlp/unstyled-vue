<script lang="ts" setup>
export interface InputProps {
  /** Автозаполнение */
  autocomplete?: string
  /** Состояние "отключено" */
  disabled?: boolean
  /** Идентификатор */
  id?: string
  /** Максимальное значение */
  max?: string | number
  /** Максимальная длина строки  */
  maxlength?: string | number
  /** Максимальное значение */
  min?: string | number
  /** Минимальная длина строки */
  minlength?: string | number
  /** Имя */
  name?: string
  /** Строка отображаемая в случае отсутствия какого-либо значения */
  placeholder?: string
  /** Состояние "только для чтения" */
  readonly?: boolean
  /** Поле ввода должно быть заполнено */
  required?: boolean
  /** Тип */
  type?: string
}

const props = withDefaults(defineProps<InputProps>(), {
  autocomplete: 'off',
  type: 'text',
})

export interface InputEmits {
  (e: 'update:modelValue', value: string | number | null): void
}

defineEmits<InputEmits>()

const model = defineModel<string | number | null>()
</script>

<template>
  <input v-bind="props" v-model="model" />
</template>
