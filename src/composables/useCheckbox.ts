import { computed, type Ref } from 'vue'

type Model = string | number | boolean | null | undefined

export function useCheckbox(model: Ref<Model>, trueValue: () => Model, falseValue: () => Model) {
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
