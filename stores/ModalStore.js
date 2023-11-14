import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useModalStore = defineStore('modalStore', {
  state: () => ({
    isVisibleModal: ref(false),
    isVisibleReg: ref(false)
  })
})