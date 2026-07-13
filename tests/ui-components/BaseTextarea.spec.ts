import { expect, test } from '@playwright/experimental-ct-vue'

import BaseTextarea from '@/components/base-textarea/BaseTextarea.vue'

test('Первоначальная проверка', async ({ mount }) => {
  const component = await mount(BaseTextarea, { props: { name: 'textarea' } })
  await expect(component).toHaveAttribute('type', 'textarea')
})
