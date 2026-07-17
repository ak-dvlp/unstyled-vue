# BaseTextarea

## Модель

<<< @/../src/components/base-textarea/BaseTextarea.vue#base-textarea-model {ts}

## Входные параметры

<script setup>
import { data } from '../props.data.ts'
</script>

<PropsTable :rows="data.BaseTextareaProps"  />

## Шаблон

<<< @/../src/components/base-textarea/BaseTextarea.vue#base-textarea-template {html}

## Пример

<ExampleContainer>
  <ExampleTextarea label="Текст" />
</ExampleContainer>

<<< @/../examples/src/components/ExampleTextarea.vue#example-textarea-classes {ts}
