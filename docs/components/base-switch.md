# BaseSwitch

## Модель

<<< @/../src/components/base-switch/BaseSwitch.vue#base-switch-model {ts}

## Входные параметры

<script setup>
import { data } from '../props.data.ts'
</script>

<PropsTable :rows="data.BaseCheckboxProps"  />

## Шаблон

<<< @/../src/components/base-switch/BaseSwitch.vue#base-switch-template {1,5,12,13html}

## Пример

<ExampleContainer>
  <ExampleSwitch label="Текст" />
</ExampleContainer>

<<< @/../examples/src/components/ExampleSwitch.vue#example-switch-template {ts}
