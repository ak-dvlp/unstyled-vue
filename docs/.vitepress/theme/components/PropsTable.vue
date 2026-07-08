<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, ref } from 'vue'

import type { PropItem } from '../../../types'

const { data } = defineProps<{
  data: PropItem[]
}>()

const { lang } = useData()

const search = ref('')

const filteredProps = computed(() => {
  return data.filter((p) => p.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
  <div class="props-table">
    <div class="props-table__search-block">
      <input v-model="search" class="table-search" placeholder="Поиск свойств..." />
    </div>

    <table class="props-table__table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prop in filteredProps" :key="prop.name">
          <td col="30">
            <code>{{ prop.name }}</code>
          </td>
          <td>
            <span class="type-badge">{{ prop.type }}</span>
          </td>
          <td>
            <code>{{ prop.isOptional || '-' }}</code>
          </td>
          <td>{{ lang === 'ru' ? prop.description_ru : prop.description_en }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.props-table {
  display: flex;
  flex-direction: column;
}

.props-table__table {
  table-layout: fixed;
}

.props-table__table td:nth-child(1) {
  width: 20%;
}

.props-table__table td:nth-child(2) {
  width: 30%;
}

.props-table__table td:nth-child(3) {
  width: 10%;
}

.props-table__table td:nth-child(4) {
  width: 40%;
}

.props-table__search-block {
  display: flex;
  justify-content: end;
}
</style>
