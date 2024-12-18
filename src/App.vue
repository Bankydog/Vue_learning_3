<script setup>
import { useFetchData } from "./stores/fetchData.js";
import { onMounted } from "vue";

const fetchDataStore = useFetchData();
onMounted(() => {
  fetchDataStore.fetchData();
});
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full h-screen">
    <h1 class="text-3xl font-bold text-cyan-500">List of Employees</h1>
    <div v-if="fetchDataStore.textErr" class="text-red-500">
      {{ fetchDataStore.textErr }}
    </div>
    <ul v-if="fetchDataStore.data.length">
      <li v-for="user in fetchDataStore.data" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>