# BaseCheckbox

## Модель

<<< @/../src/components/base-checkbox/BaseCheckbox.vue#base-checkbox-model {ts}

## Входные параметры

<script setup>
import { data } from '../props.data.ts'
</script>

<PropsTable :rows="data.BaseCheckboxProps"  />

## Шаблон

<<< @/../src/components/base-checkbox/BaseCheckbox.vue#base-checkbox-template {1-3html}

## Пример

<ExampleContainer>
  <ExampleCheckbox label="Текст" />
</ExampleContainer>

<<< @/../examples/src/components/ExampleCheckbox.vue#example-checkbox-classes {ts}
