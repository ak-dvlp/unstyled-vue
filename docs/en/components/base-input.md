# BaseInput

## Model

<<< @/../src/components/base-input/BaseInput.vue#base-input-model {ts}

## Props

<script setup>
import { data } from '../../props.data.ts'
</script>

<PropsTable :rows="data.BaseInputProps"  />

## Template

<<< @/../src/components/base-input/BaseInput.vue#base-input-template {html}

## Example

<ExampleContainer>
  <ExampleInput placeholder="Enter text" />
</ExampleContainer>

<<< @/../examples/src/components/ExampleInput.vue#example-input-classes {ts}
