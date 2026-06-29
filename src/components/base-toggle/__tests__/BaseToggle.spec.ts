import { expect, test } from '@playwright/experimental-ct-vue'

import BaseToggle from '../BaseToggle.vue'

test('Первоначальная проверка', async ({ mount }) => {
  const component = await mount(BaseToggle, { props: { name: 'textarea' } })
  await expect(component).toHaveAttribute('type', 'textarea')
})
