<script setup lang="ts">
import { computed, reactive } from 'vue'

export interface ExampleState {
  disabled?: boolean
  error?: boolean
  readonly?: boolean
  required?: boolean
}

const props = defineProps<ExampleState>()
const { disabled, error, readonly, required } = props

const state: ExampleState = reactive({
  disabled: false,
  error: false,
  readonly: false,
  required: false,
})

const classes = {
  root: 'inline-flex w-fit cursor-pointer items-center gap-1 text-sm uppercase transition-colors duration-150 select-none',
  control: 'accent-my-label h-3 w-3 cursor-pointer',
  label: 'text-my-label',
}

function onUpdate(label: keyof ExampleState) {
  const newValue = !state[label]

  Object.keys(state).forEach((key) => {
    state[key as keyof ExampleState] = key === label ? newValue : false
  })
}

const showControl = computed(() => disabled || error || readonly || required)
</script>

<template>
  <div class="vp-raw flex flex-col gap-y-px">
    <!-- Элементы управления -->
    <div v-if="showControl" class="flex flex-wrap justify-end gap-3 empty:hidden">
      <template v-for="key in Object.keys(state)" :key>
        <BaseCheckbox
          v-if="props[key as keyof typeof props]"
          :classes
          :label="key"
          :model-value="state[key as keyof ExampleState]"
          @update:model-value="onUpdate(key as keyof ExampleState)"
        />
      </template>
    </div>

    <div class="border-divider flex justify-center rounded border-2 border-dashed p-3">
      <slot
        :disabled="state.disabled"
        :error="state.error"
        :readonly="state.readonly"
        :required="state.required"
      ></slot>
    </div>
  </div>
</template>
