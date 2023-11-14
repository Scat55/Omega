import { defineStore } from 'pinia'

export const useUrlStore = defineStore('urlStore', {
  state: () => ({
    url: 'http://localhost:3001/'
  })
})