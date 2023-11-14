<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div class="bg">
    <div class="modal">

      <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <p
          class="text-white close"
          @click="closeModal"
        >Закрыть</p>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            class="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Регистрация
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
              >Email </label>
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
            <div class="grid grid-cols-2 gap-3">
              <div>
                <el-select
                  v-model="value"
                  placeholder="Статус"
                  class="mb-8"
                  effect="dark"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                  />
                </el-select>
              </div>
              <div>
                <el-select
                  v-model="value2"
                  placeholder="Пол"
                  class="mb-8"
                  effect="dark"
                >
                  <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                  />
                </el-select>
              </div>
            </div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Войти
            </button>
            <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
              >Регистрация команды</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '../stores/ModalStore'
import { useUrlStore } from '../stores/UrlStore'

const modalStore = useModalStore()
const url = useUrlStore()

const router = useRouter()
const id = ref(1);
const email = ref('')
const pass = ref('')
const value = ref('')
const value2 = ref('')

const options = [
  {
    value: 'Ученик',
    label: 'Ученик',
  },
  {
    value: 'Учитель',
    label: 'Учитель',
    disabled: false,
  }]

const options2 = [
  {
    value: 'Мужской',
    label: 'Мужской',
  },
  {
    value: 'Женский',
    label: 'Женский',
    disabled: false,
  }]

function goToPerson() {
  // modalStore.isVisibleReg = false
  // const body = document.querySelector('body');
  // body.style.overflow = '';
  // router.push(`/profile/${id.value}`)
  if (value.value === '') {
    alert('Выберите статус')
  }
  if (value2.value === '') {
    alert('Выберите пол')
  }
  else {

    const { data } = useFetch(`${url.url}auth/registration`, {
      method: 'post',
      body: {
        email: email.value,
        password: pass.value,
        gender: value2.value,
        type_user: value.value
      }
    })

    // console.log(url.url)
    // console.log(email.value, pass.value, value.value, value2.value)
    // email.value = pass.value = value.value = value2.value = ''
  }

}

function closeModal() {
  modalStore.isVisibleReg = false
  const body = document.querySelector('body');
  body.style.overflow = '';
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
  top: 0;
  right: 0;
  cursor: pointer;
}
</style>