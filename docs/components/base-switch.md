# BaseSwitch

::: danger Опасность
Кандидат на удаление
:::

## Модель

<<< @/../src/components/base-switch/BaseSwitch.vue#base-switch-model {ts}

::: info Информация
Модель не является обязательной
:::

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

<<< @/../examples/src/components/ExampleSwitch.vue#example-switch-classes {ts}

## Комментарии к устройству компонента

Элемент `input` остаётся доступным для программ экранного доступа, но визуально скрыт с помощью определённого в блоке `<style scoped>` класса:

<<< @/../src/components/base-switch/BaseSwitch.vue#base-switch-style {css}

Следует учитывать, что стили элемента `input` нужно менять с особой осторожностью, чтобы не переопределить правила класса `base-switch--visually-hidden`. В примере выше к стилям `input` добавляется только `Tailwind` класс `peer`, который позволяет менять стили других элементов компонента в зависимости от состояния `input` (например, checked, disabled, required и т.п.).
