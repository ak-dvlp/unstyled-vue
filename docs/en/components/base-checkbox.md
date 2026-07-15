# BaseCheckbox

## Model

<<< @/../src/components/base-checkbox/BaseCheckbox.vue#base-checkbox-model {ts}

## Props

<script setup>
import { data } from '../../props.data.ts'
</script>

<PropsTable :rows="data.BaseCheckboxProps"  />

## Template

```html {1-3}
<label :class="ui?.root">
  <input :checked="isChecked" :class="ui?.control" :disabled :name :readonly type="checkbox" @change="onChange" />
  <span :class="ui?.label">
    <slot>{{ label }}</slot>
  </span>
</label>
```

## Example

<ExampleContainer>
  <ExampleCheckbox label="Label" />
</ExampleContainer>

<<< @/../examples/src/components/ExampleCheckbox.vue#user-checkbox-template {ts}
