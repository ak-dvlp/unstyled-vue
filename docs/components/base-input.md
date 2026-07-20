# BaseInput

::: warning Предупреждение
В большинстве случаев можно обойтись без компонента `BaseInput`. Для объявления модели и параметров можно использовать свои или предоставляемые библиотекой типы `BaseInputModel` и `BaseInputProps`. <br />
Стили данного компонента регулируются напрямую через атрибут `class`.
:::

## Модель

<<< @/../src/components/base-input/index.ts#base-input-model {ts}

::: info Информация
Модель не является обязательной
:::

## Входные параметры

<script setup>
import { data } from '../props.data.ts'
</script>

<PropsTable :rows="data.BaseInputProps"  />

## Шаблон

<<< @/../src/components/base-input/BaseInput.vue#base-input-template {html}

## Примеры

### Поле ввода с простым набором стилей

<ExampleContainer >
  <ExampleInput placeholder="Введите текст"  />
</ExampleContainer>

<<< @/../examples/src/components/ExampleInput.vue#example-input-basic-classes {ts}

### Поле ввода с стилями учитывающими состояния: "отключено", "ошибка", "только для чтения", "обязательный"

<ExampleContainer disabled error readonly required>
  <template #default="{ disabled, error, readonly, required }">
    <ExampleInput :disabled :error placeholder="Введите текст" :readonly :required with-states />
  </template>
</ExampleContainer>

<<< @/../examples/src/components/ExampleInput.vue#example-input-state-classes {ts}
