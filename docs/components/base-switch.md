# BaseSwitch

## Модель

<<< @/../src/components/base-checkbox/BaseCheckbox.vue#base-checkbox-model{ts}

## Свойства

<script setup>
import { data } from '../props.data.ts'
</script>

<PropsTable :rows="data.BaseCheckboxProps"  />

## Шаблон

```html{1-4}
  <label class="switch">
    <input :checked="isChecked" class="visually-hidden" :disabled :name :readonly type="checkbox" @change="onChange" />
    <div class="switch__body"></div>
    <span class="switch__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
```
