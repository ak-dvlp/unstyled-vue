# BaseInput

## Model

<<< @/../src/components/base-input/BaseInput.vue#base-input-model {ts}

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

Input with simple styling

<ExampleContainer >
  <ExampleInput placeholder="Enter text"  />
</ExampleContainer>

<<< @/../examples/src/components/ExampleInput.vue#example-input-basic-classes {ts}

Input with state-dependent styling: "disabled", "error", "read-only", "required"

<ExampleContainer disabled error readonly required>
  <template #default="{ disabled, error, readonly, required }">
    <ExampleInput with-states placeholder="Enter text" :disabled :error :readonly :required />
  </template>
</ExampleContainer>

<<< @/../examples/src/components/ExampleInput.vue#example-input-state-classes {ts}
