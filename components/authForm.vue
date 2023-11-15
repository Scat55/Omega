<template>
  <div class="bg">
    <div class="modal">

      <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <button
          class="text-white close"
          type="button"
          @click="closeModal"
        >
          <i class="material-icons mr-2">close</i>
        </button>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            class="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Войдите в свой аккаунт
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            @submit.prevent="goToPerson"
            class="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-white"
              >Email</label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required=""
                  v-model="email"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-white"
                >Пароль</label>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required=""
                  v-model="pass"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4 text-lg"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Войти
              </button>
              <div class="text-sm  mt-7">
                <a
                  href="#"
                  class="font-semibold text-indigo-600 hover:text-indigo-500"
                  @click="closeAuthAndOpenReg"
                >Нет аккаунта? Регистрация</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '../stores/ModalStore'
import { ref } from 'vue'
const modalStore = useModalStore()

const router = useRouter()


const email = ref('')
const pass = ref('')
function goToPerson() {
  // modalStore.isVisibleModal = false
  // const body = document.querySelector('body');
  // body.style.overflow = '';
  // router.push(`/profile/${id}`)

  useFetch(`http://localhost:8070/auth/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      email: email.value,
      password: pass.value,
    }
  }).then(res => {
    let token = ref(res.data.value.token)

    useFetch(`http://localhost:8070/api/user_id/${email.value}`, {
      method: 'get',
      headers: {
        Authorization: `Bearer  ${token.value}`,
        'Content-Type': 'application/json',
      }
    }).then(res => {

      console.log(res.data.value.user_id)
      const userId = res.data.value.user_id
      if (typeof window !== 'undefined') {
        let token = typeof window !== 'undefined' ? localStorage.setItem('userID', userId) : null;
      }
      router.push(`profile/${res.data.value.user_id}`)
      router.push(`profile/${userId}`)

    })
  })
  // email.value = pass.value = ''
  // modalStore.isVisibleModal = false

}

function closeModal() {
  modalStore.isVisibleModal = false
  const body = document.querySelector('body');
  body.style.overflow = '';
}

function closeAuthAndOpenReg() {
  modalStore.isVisibleModal = false
  modalStore.isVisibleReg = true
}
</script>
<style lang="scss" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}
</style>