import { expect, test } from '@playwright/experimental-ct-vue'

import VTextarea from '../VTextarea.vue'

test('Первоначальная проверка', async ({ mount }) => {
  const component = await mount(VTextarea, { props: { name: 'textarea' } })
  await expect(component).toHaveAttribute('type', 'textarea')
})
