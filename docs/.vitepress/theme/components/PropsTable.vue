<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, Ref, ref } from 'vue'

import BaseTable from '../../../../src/components/base-table/BaseTable.vue'
import type { TableCol } from '../../../../src/components/base-table/index'
import type { PropItem } from '../../../types'

const { rows } = defineProps<{
  rows: PropItem[]
}>()

const { lang } = useData() as unknown as { lang: Ref<'ru' | 'en'> }

const search = ref('')

const filteredRows = computed(() => {
  return rows.filter((p) => p.name.toLowerCase().includes(search.value.toLowerCase()))
})

const headers = computed(() =>
  lang.value === 'ru'
    ? ['Имя', 'Описание и тип', 'Значение по умолчанию']
    : ['Name', 'Description and type', 'Default'],
)

const COLS: TableCol<PropItem>[] = [
  { key: 'name', width: '10rem' },
  { key: 'description', minWidth: '12.5rem' },
  { key: 'base', width: '12rem' },
]

function codeString(str: string) {
  const inner = str
    .replace(/^\s*\{\s*/, '')
    .replace(/\s*\}\s*$/, '')
    .trim()

  if (!inner) return '{}'

  const tokens = inner.split(/\s+/).filter(Boolean)
  const lines: string[] = []

  for (let i = 0; i < tokens.length; i += 2) {
    const name = tokens[i]
    const type = tokens[i + 1]
    if (name && type) {
      lines.push(`  ${name} ${type}`)
    }
  }

  return '{\n' + lines.join('\n') + '\n}'
}
</script>

<template>
  <div class="props-table overflow-x-auto">
    <div class="flex justify-end">
      <input
        v-model="search"
        class="border-divider rounded border px-1.5 py-2 text-[0.9375rem]"
        :placeholder="lang === 'ru' ? 'Поиск параметров' : 'Search props'"
      />
    </div>

    <BaseTable :cols="COLS" :headers :rows="filteredRows">
      <template #name="{ row, value }">
        {{ value }}
        <span v-if="!row.isOptional" class="text-custom-block-danger-text text-xl">*</span>
      </template>

      <template #description="{ row }">
        <div>
          <div>{{ row.description[lang] }}</div>
          <div v-if="row.type.startsWith('{')" class="text-brand-1">
            <pre class="language-ts">{{ codeString(row.type) }}</pre>
          </div>
          <div v-else class="text-brand-1">{{ row.type }}</div>
        </div>
      </template>

      <template #base="{ value }">
        <span
          :class="{
            'text-type-boolean': value === 'true' || value === 'false',
            'text-type-string-symbol': value && value.startsWith('\''),
            'text-type-number-bigint': value && Number(value),
            'text-type-object': value && (value.startsWith('{') || value.startsWith('[')),
          }"
          >{{ value || 'undefined' }}</span
        >
      </template>

      <template #empty>{{ lang === 'ru' ? 'Параметры не найдены' : 'Props not found' }}</template>
    </BaseTable>
  </div>
</template>

<style scoped>
/* Данный класс необходим чтобы перебить определяемые VitePress классы для элемента table */
.props-table :deep(table) {
  display: table !important;
  width: 100% !important;
}
</style>
