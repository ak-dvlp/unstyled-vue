<script lang="ts" setup>
export type BaseInputProps = {
  /** Автозаполнение */
  autocomplete?: string
  /** Состояние "отключено" */
  disabled?: boolean
  /** Идентификатор */
  id?: string
  /** Максимальная длина строки  */
  maxlength?: number
  /** Минимальная длина строки */
  minlength?: number
  /** Имя */
  name?: string
  /** Строка отображаемая в случае отсутствия какого-либо значения */
  placeholder?: string
  /** Состояние "только для чтения" */
  readonly?: boolean
  /** Поле ввода должно быть заполнено */
  required?: boolean
}

export type InputProps = BaseInputProps & {
  /** Максимальное значение */
  max?: number
  /** Максимальное значение */
  min?: number
  /** Тип */
  type?: string
}

const props = withDefaults(defineProps<InputProps>(), {
  autocomplete: 'off',
  type: 'text',
})

// export interface InputEmits {
//   (e: 'update:modelValue', value: string | number | null): void
// }

// defineEmits<InputEmits>()

const model = defineModel<string | number | null>()
</script>

<template>
  <input v-bind="props" v-model="model" />
</template>
