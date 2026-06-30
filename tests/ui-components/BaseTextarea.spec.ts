import BaseTextarea from '@/components/base-textarea/BaseTextarea.vue'
import { expect, test } from '@playwright/experimental-ct-vue'

test('Первоначальная проверка', async ({ mount }) => {
  const component = await mount(BaseTextarea, { props: { name: 'textarea' } })
  await expect(component).toHaveAttribute('type', 'textarea')
})
