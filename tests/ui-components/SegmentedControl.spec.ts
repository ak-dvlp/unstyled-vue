import { expect, test } from '@playwright/experimental-ct-vue'

import SegmentedControl from '@/components/segmented-control/SegmentedControl.vue'

test('Первоначальная проверка', async ({ mount }) => {
  const component = await mount(SegmentedControl, { props: { name: 'textarea' } })
  await expect(component).toHaveAttribute('type', 'textarea')
})
