export type BaseFieldEmits = {
  (e: 'update:modelValue', value: string): void
}

export interface BaseCheckboxEmits {
  click: [event: PointerEvent]
}
