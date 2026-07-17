# BaseCheckbox

## Model

<<< @/../src/components/base-checkbox/BaseCheckbox.vue#base-checkbox-model {ts}

## Props

<script setup>
import { data } from '../../props.data.ts'
</script>

<PropsTable :rows="data.BaseCheckboxProps"  />

## Template

<<< @/../src/components/base-checkbox/BaseCheckbox.vue#base-checkbox-template {1-3html}

## Example

<ExampleContainer>
  <ExampleCheckbox label="Label" />
</ExampleContainer>

<<< @/../examples/src/components/ExampleCheckbox.vue#example-checkbox-classes {ts}
