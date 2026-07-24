# BaseTextarea

## Модель

В компоненте используется следующий тип модели:

<<< @/../src/components/base-textarea/index.ts#base-textarea-model {ts}

::: info Информация
Модель не является обязательной
:::

## Входные параметры

<script setup>
import { data } from '../props.data.ts'
</script>

<PropsTable :rows="data.BaseTextareaProps"  />

## Шаблон

<<< @/../src/components/base-textarea/BaseTextarea.vue#base-textarea-template {html}

## Пример

<ExampleContainer>
  <template #default="{ modelValue, updateModelValue }">
    <ExampleTextarea :model-value="modelValue" placeholder="Введите текст" @update:model-value="updateModelValue" />
  </template>
</ExampleContainer>

<<< @/../examples/src/components/ExampleTextarea.vue#example-textarea-template {3html}
