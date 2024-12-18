import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useFetchDataStore = defineStore('fetchDataStore', () => {
  // State
  const data = ref([])
  const isLoading = ref(false)
  const isError = ref(null)

  // Actions
  const fetchData = async () => {
    isLoading.value = true
    isError.value = null

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      // console.log(response.data)
      data.value = response.data
    } catch (err) {
      isError.value = err.response?.data?.message || err.message
    } finally {
      isLoading.value = false
    }
  }

  return { data, isLoading, isError, fetchData }
})
