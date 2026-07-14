# BaseSwitch

## Модель

<<< @/../src/components/base-checkbox/BaseCheckbox.vue#base-checkbox-model{ts}

## Входные параметры

<script setup>
import { data } from '../props.data.ts'
</script>

<PropsTable :rows="data.BaseCheckboxProps"  />

## Шаблон

```html{1,3,4}
<label :class="ui?.root">
  <input :checked="isChecked" class="visually-hidden" :disabled :name :readonly type="checkbox" @change="onChange" />
  <div :class="ui?.control"></div>
  <span :class="ui?.label">
    <slot>{{ label }}</slot>
  </span>
</label>
```
