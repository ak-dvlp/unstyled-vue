# BaseTextarea

## Model

<<< @/../src/components/base-textarea/BaseTextarea.vue#base-textarea-model {ts}

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
  <ExampleTextarea placeholder="Enter text" />
</ExampleContainer>

<<< @/../examples/src/components/ExampleTextarea.vue#example-textarea-classes {ts}
