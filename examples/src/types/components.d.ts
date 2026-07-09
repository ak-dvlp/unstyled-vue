import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BaseCheckbox: (typeof import('@/components/base-checkbox/BaseCheckbox.vue'))['default']
    BaseInput: (typeof import('@/components/base-input/BaseInput.vue'))['default']
    BaseSwitch: (typeof import('@/components/base-switch/BaseSwitch.vue'))['default']
    BaseTable: (typeof import('@/components/base-table/BaseTable.vue'))['default']
    BaseTextarea: (typeof import('@/components/base-textarea/BaseTextarea.vue'))['default']
    BaseToggle: (typeof import('@/components/base-toggle/BaseToggle.vue'))['default']
    SegmentedControl: (typeof import('@/components/segmented-control/SegmentedControl.vue'))['default']
  }
}
