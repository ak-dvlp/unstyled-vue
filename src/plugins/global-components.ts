import VInput from '@components/VInput.vue'

import type { App } from 'vue'

export default {
  install: (app: App) => {
    app.component('VInput', VInput)
  },
}
