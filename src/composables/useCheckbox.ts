import { computed, type Ref } from 'vue'

// #region use-checkbox-composable
type Model = string | number | boolean | null | undefined
// #endregion use-checkbox-composable

/**
 * @ru
 * Составная функция для работы с checkbox-подобными HTML-элементами.
 *
 * @param model Модель целевого компонента.
 * @param trueValue Параметр компонента.
 * @param falseValue Параметр компонента.
 * @returns Вычисляемое свойство isChecked и функция onChange.
 *
 * @en
 * Composable function for working with checkbox-like HTML elements.
 *
 * @param model Target component model.
 * @param trueValue Component configuration parameter.
 * @param falseValue Component configuration parameter.
 * @returns Computed property isChecked and an onChange handler function.
 */
export function useCheckbox(model: Ref<Model>, trueValue: () => Model, falseValue: () => Model) {
  /**
   * @ru
   * Вычисляемое свойство отражающее состояние checked поля ввода.
   *
   * @en
   * A calculated property that reflects the checked state of the input field.
   */
  const isChecked = computed(() => {
    const uTrue = trueValue()
    const uFalse = falseValue()

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
    const { checked } = evt.target as HTMLInputElement

    const uTrue = trueValue()
    const uFalse = falseValue()

    if (uTrue || uFalse) {
      if (checked) {
        if (uTrue) {
          model.value = uTrue
        } else {
          model.value = true
        }
      } else {
        if (uFalse) {
          model.value = uFalse
        } else {
          model.value = false
        }
      }
    } else {
      model.value = checked
    }
  }

  return {
    isChecked,
    onChange,
  }
}
