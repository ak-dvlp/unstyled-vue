<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, ref } from 'vue'

import type { TableCol } from '../../../../src/components/base-table/BaseTable.vue'
import BaseTable from '../../../../src/components/base-table/BaseTable.vue'
import type { PropItem } from '../../../types'

const { rows } = defineProps<{
  rows: PropItem[]
}>()

const { lang } = useData()

const search = ref('')

const filteredRows = computed(() => {
  return rows.filter((p) => p.name.toLowerCase().includes(search.value.toLowerCase()))
})

const headers = computed(() =>
  lang.value === 'ru'
    ? ['Имя свойства', 'Тип свойства', 'Значение по умолчанию', 'Описание']
    : ['Property name', 'Property type', 'Default', 'Description'],
)

const cols: TableCol<PropItem>[] = [
  { key: 'name', width: '20%' },
  { key: 'type', width: '20%' },
  { key: 'type', width: '20%' },
  { key: lang.value === 'ru' ? 'description_ru' : 'description_en', width: '20%' },
]
</script>

<template>
  <div class="props-table">
    <div class="props-table__search-block">
      <input v-model="search" class="props-table__search-input" placeholder="Поиск свойств..." />
    </div>

    <BaseTable :cols :headers :rows="filteredRows">
      <template #name="{ row, value }">
        {{ value }}
        <span v-if="!row.isOptional" class="text-required">*</span>
      </template>

      <template #empty>Свойство не найдено</template>
    </BaseTable>
  </div>
</template>

<style scoped>
.props-table {
  display: flex;
  flex-direction: column;
}

.props-table__table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
}

.props-table__search-block {
  display: flex;
  justify-content: flex-end;
}

.props-table__search-input {
  border: 1px solid var(--vt-c-divider, hsl(0, 0%, 90%));
  border-radius: 0.25rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.9375rem;
}

.text-required {
  color: var(--vp-custom-block-danger-text, hsl(0, 74%, 53%));
  font-size: 20px;
}
</style>
