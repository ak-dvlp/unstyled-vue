import { computed, type MaybeRefOrGetter, type Ref, toValue } from 'vue'

// #region use-checkbox-composable
type Model = string | number | boolean | null | undefined
// #endregion use-checkbox-composable

/**
 * @ru
 * Составная функция для работы с HTML-элементами типа checkbox.
 *
 * @param model - Модель целевого компонента.
 * @param trueValue - Параметр конфигурации компонента.
 * @param falseValue - Параметр конфигурации компонента.
 * @returns Объект, содержащий вычисляемое свойство `isChecked` и функцию-обработчик `onChange`.
 *
 * @en
 * A composable function for working with HTML checkbox elements.
 *
 * @param model - Target component model.
 * @param trueValue - Component configuration parameter.
 * @param falseValue - Component configuration parameter.
 * @returns An object containing the computed property `isChecked` and an `onChange` handler function.
 */
export function useCheckbox(
  model: Ref<Model>,
  readonly: MaybeRefOrGetter<boolean>,
  trueValue: MaybeRefOrGetter<Model>,
  falseValue: MaybeRefOrGetter<Model>,
) {
  /**
   * @ru
   * Вычисляемое свойство отражающее состояние checked поля ввода.
   *
   * @en
   * A calculated property that reflects the checked state of the input field.
   */
  const isChecked = computed(() => {
    const uTrue = toValue(trueValue)
    const uFalse = toValue(falseValue)

    if (uTrue || uFalse) {
      if (model.value === uTrue) {
        return true
      } else if (model.value === uFalse) {
        return false
      } else {
        return false
      }
    } else if (typeof model.value === 'boolean') {
      return model.value
    } else {
      return false
    }
  })

  /**
   * @ru
   * Обработчик события "change", передающий значение в модель.
   *
   * @param evt Событие
   *
   * @en
   * A "change" event handler that updates the model with the value.
   *
   * @param evt Event
   */
  function onChange(evt: Event) {
    if (toValue(readonly)) {
      evt.preventDefault()
      return
    }

    const { checked } = evt.target as HTMLInputElement

    const uTrue = toValue(trueValue) as Model
    const uFalse = toValue(falseValue) as Model

    if (uTrue !== true || uFalse !== false) {
      model.value = checked ? uTrue : uFalse
    } else {
      model.value = checked
    }
  }

  return {
    isChecked,
    onChange,
  }
}
