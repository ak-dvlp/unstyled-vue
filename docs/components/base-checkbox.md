# BaseCheckbox

## Модель

<<< @/../src/components/base-checkbox/BaseCheckbox.vue#base-checkbox-model {ts}

## Входные параметры

<script setup>
import { data } from '../props.data.ts'
</script>

<PropsTable :rows="data.BaseCheckboxProps"  />

## Шаблон

```html {1-3}
<label :class="ui?.root">
  <input :checked="isChecked" :class="ui?.control" :disabled :name :readonly type="checkbox" @change="onChange" />
  <span :class="ui?.label">
    <slot>{{ label }}</slot>
  </span>
</label>
```

## Пример

<<< @/../examples/src/components/ExampleCheckbox.vue#user-checkbox-template {ts}

<ExampleCheckbox label="Пример" />
