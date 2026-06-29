import { expect, test } from '@playwright/experimental-ct-vue'

import VToggle from '../VToggle.vue'

test('Первоначальная проверка', async ({ mount }) => {
  const component = await mount(VToggle, { props: { name: 'textarea' } })
  await expect(component).toHaveAttribute('type', 'textarea')
})
