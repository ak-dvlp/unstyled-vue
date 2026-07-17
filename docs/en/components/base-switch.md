# BaseSwitch

## Model

<<< @/../src/components/base-switch/BaseSwitch.vue#base-switch-model {ts}

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

<<< @/../examples/src/components/ExampleSwitch.vue#example-switch-classes {ts}

## Component architecture notes

The `input` element remains accessible to screen readers but is visually hidden via a class defined in the `<style scoped>` block:

<<< @/../src/components/base-switch/BaseSwitch.vue#base-switch-style {css}

It should be noted that the styles of the `input` element must be modified with extreme care to avoid overriding the rules of the `base-switch--visually-hidden` class. In the example above, only the `Tailwind` class `peer` is added to the `input` styles, which allows changing the styles of other component's elements depending on the `input` state (e.g., checked, disabled, required, etc.)."
