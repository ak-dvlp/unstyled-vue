# BaseSwitch

## Model

<<< @/../src/components/base-checkbox/BaseCheckbox.vue#base-checkbox-model{ts}

## Props

<script setup>
import { data } from '../../props.data.ts'
</script>

<PropsTable :rows="data.BaseCheckboxProps"  />

## Template

```html{1,3,4}
<label :class="ui?.root">
  <input :checked="isChecked" class="visually-hidden" :disabled :name :readonly type="checkbox" @change="onChange" />
  <div :class="ui?.control"></div>
  <span :class="ui?.label">
    <slot>{{ label }}</slot>
  </span>
</label>
```

## Example

<ExampleContainer>
  <ExampleSwitch label="Label" />
</ExampleContainer>

<<< @/../examples/src/components/ExampleCheckbox.vue#user-checkbox-template {ts}
