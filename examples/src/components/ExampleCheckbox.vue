<script setup lang="ts">
import type { BaseCheckboxProps } from '@/index'

interface ExampleCheckboxProps extends BaseCheckboxProps {
  /** Наличие ошибки */
  error?: boolean
  /** Категория примера */
  kind?: 'basic' | 'advanced' | 'states' | 'icons'
}

const model = defineModel<string | number | boolean | null | undefined>()

defineProps<ExampleCheckboxProps>()
</script>

<template>
  <!-- #region example-checkbox-advanced-template -->
  <BaseCheckbox
    v-if="kind === 'advanced'"
    v-model="model"
    :classes="{
      root: 'border-my-label/60 hover:border-my-label has-checked:border-my-label has-checked:bg-my-label/10 flex h-fit cursor-pointer items-center gap-1 rounded-lg border bg-transparent p-2 transition-colors duration-150 select-none',
      input: 'accent-my-label peer',
      label: 'text-my-label/70 peer-hover:text-my-label peer-checked:text-my-label',
    }"
    :label
    name="example-checkbox-advanced"
  />
  <!-- #endregion example-checkbox-advanced-template -->

  <!-- #region example-checkbox-states-template -->
  <BaseCheckbox
    v-else-if="kind === 'states'"
    v-model="model"
    :aria-invalid="error"
    :classes="{
      root: 'group flex cursor-pointer items-center gap-1 select-none has-disabled:cursor-not-allowed has-aria-readonly:cursor-not-allowed',
      input:
        'peer aria-invalid:checked:border-my-error enabled:checked:border-my-label border-my-input-border group-hover:required:border-my-required group-hover:enabled:not-aria-readonly:not-aria-invalid:not-required:border-my-label aria-readonly:checked:border-my-label/70 aria-readonly:checked:bg-my-label/70 group-hover:aria-invalid:border-my-error bg-my-input-bg checked:bg-my-label disabled:checked:bg-my-label/70 aria-invalid:checked:bg-my-error h-3 w-3 cursor-pointer appearance-none rounded-[3px] border border-solid bg-clip-content p-px disabled:cursor-not-allowed aria-readonly:cursor-not-allowed aria-readonly:border-dashed',
      label:
        'text-my-label peer-aria-invalid:text-my-error peer-required:peer-invalid:text-my-required peer-disabled:text-my-label/70 peer-aria-readonly:text-my-label/70',
    }"
    :disabled
    :label
    name="example-checkbox-states"
    :readonly
    :required
  />
  <!-- #endregion example-checkbox-states-template -->

  <!-- #region example-checkbox-icons-template -->
  <BaseCheckbox
    v-else-if="kind === 'icons'"
    v-model="model"
    :aria-invalid="error"
    :classes="{
      root: 'group flex cursor-pointer items-center gap-1 select-none has-disabled:cursor-not-allowed',
      input: 'peer sr-only',
      label:
        'text-my-label peer-aria-invalid:text-my-error peer-required:peer-invalid:text-my-required peer-disabled:text-my-label/70',
    }"
    :disabled
    :label
    name="example-checkbox-states"
    :readonly
    :required
  >
    <template #control>
      <div
        class="border-my-label before:bg-my-label/10 relative h-3 w-3 rounded-[3px] border before:absolute before:-inset-2 before:scale-0 before:rounded-full before:transition-transform before:duration-300 before:content-[''] group-hover:before:scale-100"
      >
        <svg class="stroke-my-label fill-none stroke-3" viewBox="0 0 24 24">
          <path
            class="duration-300 ease-in-out [stroke-dasharray:24]"
            :class="model ? '[stroke-dashoffset:0]' : '[stroke-dashoffset:24]'"
            d="M5.5 12 L10 16.5 L18.5 6.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </template>
  </BaseCheckbox>
  <!-- #endregion example-checkbox-icons-template -->

  <!-- #region example-checkbox-basic-template -->
  <BaseCheckbox
    v-else
    v-model="model"
    :classes="{
      root: 'flex cursor-pointer items-center gap-1 select-none',
      input: 'accent-my-label cursor-pointer',
      label: 'text-my-label',
    }"
    :label
    name="example-checkbox-basic"
  />
  <!-- #endregion example-checkbox-basic-template -->
</template>
