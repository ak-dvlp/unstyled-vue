# BaseCheckbox

## Модель

<<< @/../src/components/base-checkbox/index.ts#base-checkbox-model {ts}

::: info Информация
Модель не является обязательной
:::

## Входные параметры

<script setup>
import { data } from '../props.data.ts'
</script>

<PropsTable :rows="data.BaseCheckboxProps"  />

## Шаблон

<<< @/../src/components/base-checkbox/BaseCheckbox.vue#base-checkbox-template {1,8,18html}

## Примеры

### Поле выбора с простым набором стилей

<ExampleContainer>
  <template #default="{ modelValue, updateModelValue }">
    <ExampleCheckbox label="Текст" :model-value="modelValue" @update:model-value="updateModelValue" />
  </template>
</ExampleContainer>

<<< @/../examples/src/components/ExampleCheckbox.vue#example-checkbox-basic-template {5-7html}

### Поле выбора с расширенным набором стилей

<ExampleContainer>
  <template #default="{ modelValue, updateModelValue }">
    <ExampleCheckbox kind="advanced" label="Текст" :model-value="modelValue" @update:model-value="updateModelValue" />
  </template>
</ExampleContainer>

<<< @/../examples/src/components/ExampleCheckbox.vue#example-checkbox-advanced-template {5-7html}

### Поле выбора с состояниями

В данном примере пользовательский класс `accent-my-label` (использовавшийся для окраски поля выбора в цвет `my-label`) заменён на служебный класс `appearance-none`. Этот класс даёт свободу в стилизации границы и фона поля выбора.

<ExampleContainer disabled error readonly required>
  <template #default="{ disabled, error, readonly, required, modelValue, updateModelValue }">
    <ExampleCheckbox
      :disabled
      :error
      kind="states"
      label="Текст"
      :model-value="modelValue"
      :readonly
      :required
      @update:model-value="updateModelValue"
    />
  </template>
</ExampleContainer>

<<< @/../examples/src/components/ExampleCheckbox.vue#example-checkbox-states-template {6-10html}

### Поле выбора с иконкой

::: warning Предупреждение
В данном примере элемент `input` в обязательном порядке должен иметь класс `sr-only` либо его `CSS` аналог:

```css
.your-class-name {
  position: absolute;
  clip-path: inset(50%);
  margin: -1px;
  border-width: 0;
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
}
```

так как для отображения поля выбора вместо элемента `input` используется элемент `div` являющийся контейнером для `svg` изображения.
:::

<ExampleContainer>
  <template #default="{ modelValue, updateModelValue }">
    <ExampleCheckbox kind="icons" label="Текст" :model-value="modelValue" @update:model-value="updateModelValue" />
  </template>
</ExampleContainer>

<<< @/../examples/src/components/ExampleCheckbox.vue#example-checkbox-icons-template {6-9,19,21,23-27html}
