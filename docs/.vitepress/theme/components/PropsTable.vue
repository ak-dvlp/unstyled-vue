<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, Ref, ref } from 'vue'

import BaseTable from '../../../../src/components/base-table/BaseTable.vue'
import type { TableCol } from '../../../../src/components/base-table/index'
import type { PropItem } from '../../../types'

const { rows } = defineProps<{
  rows: PropItem[]
}>()

const { lang } = useData() as { lang: Ref<'en' | 'ru'> }

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
  { key: 'default', width: '12rem' },
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
    <div class="props-table__search-block">
      <input
        v-model="search"
        class="props-table__search-input"
        :placeholder="lang === 'ru' ? 'Поиск свойства' : 'Search property'"
      />
    </div>

    <BaseTable :cols="COLS" :headers :rows="filteredRows">
      <template #name="{ row, value }">
        {{ value }}
        <span v-if="!row.isOptional" class="text-required">*</span>
      </template>

      <template #description="{ row }">
        <div>
          <div>{{ row.description[lang] }}</div>
          <div v-if="row.type.startsWith('{')" class="type-color">
            <!-- <div v-for="(item, i) in formatObjectLikeString(row.type)" :key="i">
              <div>{{ item }}</div>
            </div> -->
            <pre class="language-ts">{{ codeString(row.type) }}</pre>
          </div>
          <div v-else class="type-color">{{ row.type }}</div>
        </div>
      </template>

      <template #default="{ value }">
        <span :class="{ 'template-literal': value?.startsWith('`') }">{{ value || '-' }}</span>
      </template>

      <template #empty>Свойство не найдено</template>
    </BaseTable>
  </div>
</template>

<style scoped>
/* Данный класс необходим чтобы перебить определяемые VitePress классы для элементы table */
.props-table :deep(table) {
  display: table !important;
  width: 100% !important;
}

.props-table__search-block {
  display: flex;
  justify-content: flex-end;
}

.props-table__search-input {
  border: 1px solid var(--divider);
  border-radius: 0.25rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.9375rem;
}

.text-required {
  color: var(--vp-custom-block-danger-text);
  font-size: 1.25rem;
}

.type-color {
  color: var(--vp-c-brand-1);
}

.template-literal {
  color: var(--highlighted-text);
}
</style>
