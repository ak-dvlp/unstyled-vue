# BaseSwitch

## Model

<<< @/../src/components/base-checkbox/BaseCheckbox.vue#base-checkbox-model {ts}

## Props

<script setup>
import { data } from '../../props.data.ts'
</script>

<PropsTable :rows="data.BaseCheckboxProps"  />

## Template

<<< @/../src/components/base-switch/BaseSwitch.vue#base-switch-template {1,5,12,13html}

## Example

<ExampleContainer>
  <ExampleSwitch label="Label" />
</ExampleContainer>

<<< @/../examples/src/components/ExampleSwitch.vue#example-switch-template {ts}
