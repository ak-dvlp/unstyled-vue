import type { App } from 'vue'

import BaseCheckbox from '@/components/base-checkbox/BaseCheckbox.vue'
import BaseInput from '@/components/base-input/BaseInput.vue'
import BaseSwitch from '@/components/base-switch/BaseSwitch.vue'
import BaseTextarea from '@/components/base-textarea/BaseTextarea.vue'
import BaseToggle from '@/components/base-toggle/BaseToggle.vue'
import SegmentedControl from '@/components/base-toggle/BaseToggle.vue'

export default {
  install: (app: App) => {
    app.component('BaseCheckbox', BaseCheckbox)
    app.component('BaseInput', BaseInput)
    app.component('BaseSwitch', BaseSwitch)
    app.component('BaseTextarea', BaseTextarea)
    app.component('BaseToggle', BaseToggle)
    app.component('SegmentedControl', SegmentedControl)
  },
}
