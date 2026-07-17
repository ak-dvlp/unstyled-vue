# BaseInput

## Модель

<<< @/../src/components/base-input/BaseInput.vue#base-input-model {ts}

## Входные параметры

<script setup>
import { data } from '../props.data.ts'
</script>

<PropsTable :rows="data.BaseInputProps"  />

## Шаблон

<<< @/../src/components/base-input/BaseInput.vue#base-input-template {html}

## Пример

<ExampleContainer>
  <ExampleInput placeholder="Введите текст" />
</ExampleContainer>

<<< @/../examples/src/components/ExampleInput.vue#example-input-classes {ts}
