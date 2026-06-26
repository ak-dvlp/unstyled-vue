import VInput from '@components/input/VInput.vue'
import VTextarea from '@components/textarea/VTextarea.vue'

import type { App } from 'vue'

export default {
  install: (app: App) => {
    app.component('VInput', VInput)
    app.component('VTextarea', VTextarea)
  },
}
