<script setup>
import { useFetchDataStore } from '../stores/fetchDataStore'
import { onMounted } from 'vue'

const dataStore = useFetchDataStore()
const { data, isLoading, isError, fetchData } = dataStore

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div>
    <button @click="fetchData" :disabled="isLoading" class="border-4 border-r-emerald-700">
      Fetch Data
    </button>
    <div v-if="isLoading">Loading...</div>
    <div v-if="isError" class="text-red-500">{{ isError }}</div>
    <ul v-if="data.length">
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
