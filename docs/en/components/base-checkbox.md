# BaseCheckbox

## Model

<<< @/../src/components/base-checkbox/index.ts#base-checkbox-model {ts}

::: info
The model is not required
:::

## Props

<script setup>
import { data } from '../../props.data.ts'
</script>

<PropsTable :rows="data.BaseCheckboxProps"  />

## Template

<<< @/../src/components/base-checkbox/BaseCheckbox.vue#base-checkbox-template {1,8,18html}

## Examples

### Checkbox with basic styling

<ExampleContainer>
  <template #default="{ modelValue, updateModelValue }">
    <ExampleCheckbox label="Label" :model-value="modelValue" @update:model-value="updateModelValue" />
  </template>
</ExampleContainer>

<<< @/../examples/src/components/ExampleCheckbox.vue#example-checkbox-basic-template {5-7html}

### Checkbox with advanced styling

<ExampleContainer>
  <template #default="{ modelValue, updateModelValue }">
    <ExampleCheckbox kind="advanced" label="Label" :model-value="modelValue" @update:model-value="updateModelValue" />
  </template>
</ExampleContainer>

<<< @/../examples/src/components/ExampleCheckbox.vue#example-checkbox-advanced-template {5-7html}

### Checkbox with states

In this example, the custom class `accent-my-label` (previously used to tint the checkbox color to `my-label`) is replaced with the utility class `appearance-none`. This class provides full freedom when styling the checkbox border and background.

<ExampleContainer disabled error readonly required>
  <template #default="{ disabled, error, readonly, required, modelValue, updateModelValue }">
    <ExampleCheckbox
      :disabled
      :error
      kind="states"
      label="Label"
      :model-value="modelValue"
      :readonly
      :required
      @update:model-value="updateModelValue"
    />
  </template>
</ExampleContainer>

<<< @/../examples/src/components/ExampleCheckbox.vue#example-checkbox-states-template {6-10html}

### Checkbox with an Icon

::: warning
In this example, the `input` element is visually hidden but remains accessible to screen readers using the `sr-only` class, which consists of the following `CSS rules`:

```css
.your-class-name {
  position: absolute;
  clip-path: inset(50%);
  margin: -1px;
  border-width: 0;
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
}
```

This is necessary because a `div` element, serving as a container for an `SVG image`, is used to display the selection field instead of the `input` element.
:::

<ExampleContainer>
  <template #default="{ modelValue, updateModelValue }">
    <ExampleCheckbox kind="icons" label="Label" :model-value="modelValue" @update:model-value="updateModelValue" />
  </template>
</ExampleContainer>

<<< @/../examples/src/components/ExampleCheckbox.vue#example-checkbox-icons-template {6-9,19,21,23-27html}
