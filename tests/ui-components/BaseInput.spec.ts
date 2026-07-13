import { expect, test } from '@playwright/experimental-ct-vue'

import BaseInput from '@/components/base-input/BaseInput.vue'

test('Первоначальная проверка', async ({ mount }) => {
  const component = await mount(BaseInput, { props: { type: 'text' } })
  await expect(component).toHaveAttribute('type', 'text')
})
