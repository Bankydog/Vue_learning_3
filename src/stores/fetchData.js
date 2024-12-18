import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useFetchData = defineStore("fetchData", {
  // State
  state: () => ({
    data: [],
    textErr: null,
  }),

  // Actions
  actions: {
    async fetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.data = response.data;
      } catch (error) {
        this.textErr = error.response?.data?.message || error.message;
      }
    },
  },

  // Getters
  getters: {
    getUsersCount: (state) => state.data.length,
  },
});
