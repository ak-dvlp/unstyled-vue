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

## Пример стилизации

<<< @/../examples/src/user-components/UserCheckbox.vue#user-checkbox-template {ts}

<UserCheckbox label="Пример" />
