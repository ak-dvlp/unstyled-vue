import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VInput: (typeof import('@components/input/VInput.vue'))['default']
  }
}
