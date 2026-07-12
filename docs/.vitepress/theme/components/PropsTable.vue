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
    ? ['Имя', 'Описание и тип', 'Значение по умолчанию']
    : ['Name', 'Description and type', 'Default'],
)

const cols: TableCol<PropItem>[] = [
  { key: 'name', width: '10rem' },
  { key: 'type', width: 'auto', minWidth: '12.5rem' },
  { key: 'default', width: '12rem' },
]
</script>

<template>
  <div class="props-table">
    <div class="props-table__search-block">
      <input
        v-model="search"
        class="props-table__search-input"
        :placeholder="lang === 'ru' ? 'Поиск свойства' : 'Search property'"
      />
    </div>

    <BaseTable :cols :headers :rows="filteredRows">
      <template #name="{ row, value }">
        {{ value }}
        <span v-if="!row.isOptional" class="text-required">*</span>
      </template>

      <template #type="{ row }">
        <div>
          <div>{{ lang === 'ru' ? row.description_ru : row.description_en }}</div>
          <div class="type-color">{{ row.type }}</div>
        </div>
      </template>

      <template #default="{ value }">
        <span :class="{ 'template-literal': value?.startsWith('`') }">{{ value }}</span>
      </template>

      <template #empty>Свойство не найдено</template>
    </BaseTable>
  </div>
</template>

<style scoped>
.props-table {
  display: flex;
  flex-direction: column;
  width: 100%;
}

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
  color: var(--template-literal-text);
}
</style>
