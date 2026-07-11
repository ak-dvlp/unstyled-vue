# BaseCheckbox

## Модель

<<< @/../src/components/base-checkbox/BaseCheckbox.vue#base-checkbox-model{ts}

## Свойства

<script setup>
import { data } from '../props.data.ts'
</script>

<PropsTable :rows="data.BaseCheckboxProps"  />

## Шаблон

```html{1-3}
  <label class="checkbox">
    <input :checked="isChecked" class="checkbox__body" :disabled :name :readonly type="checkbox" @change="onChange" />
    <span class="checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
```
