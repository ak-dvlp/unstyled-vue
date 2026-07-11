# BaseSwitch

## Model

<<< @/../src/components/base-checkbox/BaseCheckbox.vue#base-checkbox-model{ts}

## Props

<script setup>
import { data } from '../../props.data.ts'
</script>

<PropsTable :rows="data.BaseCheckboxProps"  />

## Template

```html{1-4}
  <label class="switch">
    <input :checked="isChecked" class="visually-hidden" :disabled :name :readonly type="checkbox" @change="onChange" />
    <div class="switch__body"></div>
    <span class="switch__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
```
