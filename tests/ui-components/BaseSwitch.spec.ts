import BaseSwitch from '@/components/base-switch/BaseSwitch.vue'
import { expect, test } from '@playwright/experimental-ct-vue'

test('Первоначальная проверка', async ({ mount }) => {
  const component = await mount(BaseSwitch, { props: { name: 'textarea' } })
  await expect(component).toHaveAttribute('type', 'textarea')
})
