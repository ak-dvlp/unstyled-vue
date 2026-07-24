# BaseInput

::: warning
In most cases, the `BaseInput` component can be omitted. You can use your own types or the library-provided `BaseInputModel` and `BaseInputProps` to declare the model and props. <br />
The styles for this component are managed directly via the `class` attribute
:::

## Model

The component uses the following model type:

<<< @/../src/components/base-input/index.ts#base-input-model {ts}

::: info
The model is not required
:::

## Props

<script setup>
import { data } from '../../props.data.ts'
</script>

<PropsTable :rows="data.BaseInputProps"  />

## Template

<<< @/../src/components/base-input/BaseInput.vue#base-input-template {html}

## Examples

Example template

<<< @/../examples/src/components/ExampleInput.vue#example-input-template {1,5,13html}

### Input with simple styling

<ExampleContainer>
  <template #default="{ modelValue, updateModelValue }">
    <ExampleInput :model-value="modelValue" placeholder="Enter text" @update:model-value="updateModelValue" />
  </template>
</ExampleContainer>

<<< @/../examples/src/components/ExampleInput.vue#example-input-basic-classes {ts}

### Input with states

<ExampleContainer disabled error readonly required>
  <template #default="{ disabled, error, readonly, required, modelValue, updateModelValue }">
    <ExampleInput
      :disabled
      :error
      placeholder="Enter text"
      :readonly
      :required
      with-states
      @update:model-value="updateModelValue"
    />
  </template>
</ExampleContainer>

<<< @/../examples/src/components/ExampleInput.vue#example-input-state-classes {ts}
