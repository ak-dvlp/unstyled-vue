import BaseInput from '@/components/base-input/BaseInput.vue'
import BaseSwitch from '@/components/base-switch/BaseSwitch.vue'
import BaseTextarea from '@/components/base-textarea/BaseTextarea.vue'
import BaseToggle from '@/components/base-toggle/BaseToggle.vue'
import SegmentedControl from '@/components/base-toggle/BaseToggle.vue'

import type { App } from 'vue'

export default {
  install: (app: App) => {
    app.component('BaseInput', BaseInput)
    app.component('BaseSwitch', BaseSwitch)
    app.component('BaseTextarea', BaseTextarea)
    app.component('BaseToggle', BaseToggle)
    app.component('SegmentedControl', SegmentedControl)
  },
}
