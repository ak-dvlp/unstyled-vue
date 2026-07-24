# BaseTextarea

## Model

The component uses the following model type:

<<< @/../src/components/base-textarea/index.ts#base-textarea-model {ts}

::: info
The model is not required
:::

## Props

<script setup>
import { data } from '../../props.data.ts'
</script>

<PropsTable :rows="data.BaseTextareaProps"  />

## Template

<<< @/../src/components/base-textarea/BaseTextarea.vue#base-textarea-template {html}

## Example

<ExampleContainer>
  <template #default="{ modelValue, updateModelValue }">
    <ExampleTextarea :model-value="modelValue" placeholder="Enter text" @update:model-value="updateModelValue" />
  </template>
</ExampleContainer>

<<< @/../examples/src/components/ExampleTextarea.vue#example-textarea-template {3html}
