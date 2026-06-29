import type { App } from 'vue'

import VInput from '../components/input/VInput.vue'
import VTextarea from '../components/textarea/VTextarea.vue'

export default {
  install: (app: App) => {
    app.component('VInput', VInput)
    app.component('VTextarea', VTextarea)
  },
}
