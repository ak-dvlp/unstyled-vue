import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VInput: (typeof import('@components/VInput.vue'))['default']
  }
}
