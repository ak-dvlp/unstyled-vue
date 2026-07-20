<script setup lang="ts">
import { computed, reactive } from 'vue'

export interface ExampleState {
  disabled?: boolean
  error?: boolean
  readonly?: boolean
  required?: boolean
  simple?: boolean
}

const model = defineModel(undefined)

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
  input: 'accent-my-label h-3 w-3 cursor-pointer',
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
  <div class="vp-raw mt-3 flex flex-col gap-y-px">
    <!-- Элементы управления -->
    <div v-if="showControl" class="flex flex-wrap justify-end gap-3 empty:hidden">
      <template v-for="key in Object.keys(props).filter((k) => k !== 'modelValue')" :key>
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
      <template v-if="simple">
        <slot
          :disabled="state.disabled"
          :error="state.error"
          :modelValue="model"
          :readonly="state.readonly"
          :required="state.required"
          :updateModelValue="(val: boolean) => (model = val)"
        ></slot>
      </template>

      <div v-else class="space-red-500 divide-divider flex w-full divide-x-2 divide-dashed">
        <div class="w-1/3 p-1 text-sm">
          <div>
            _model_: _<span class="text-brand-1">{{ model }}</span
            >_
          </div>
          <div>
            typeof model: <span class="text-brand-1">{{ typeof model }}</span>
          </div>
          <!-- <div>
            model === null: <span class="text-my-label">{{ model === null }}</span>
          </div>
          <div>
            model === '': <span class="text-my-label">{{ model === null }}</span>
          </div> -->
        </div>

        <div class="flex w-2/3 items-center-safe justify-center">
          <slot
            :disabled="state.disabled"
            :error="state.error"
            :modelValue="model"
            :readonly="state.readonly"
            :required="state.required"
            :updateModelValue="(val: boolean) => (model = val)"
          ></slot>
        </div>
      </div>
    </div>
  </div>
</template>
