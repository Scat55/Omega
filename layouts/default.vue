<template>
  <header class=" border-b-2 shadow-md shadow-grey header">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div class="flex lg:flex-1">
        <a
          href="#"
          class="-m-1.5 p-1.5"
        >
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon
            class="h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <a
          href="#AboutUs"
          class="text-sm font-semibold leading-6 text-gray-900"
        >О нас</a>
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900"
        >Приемущества</a>
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900"
        >Учебные материалы</a>
        <!-- <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900"
        >Company</a> -->
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <P
          @click="showModalReg"
          class="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
        >Войти <span aria-hidden="true">&rarr;</span></p>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a
            href="#"
            class="-m-1.5 p-1.5"
          >

            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon
              class="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <!-- Адаптив меню -->
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure
                as="div"
                class="-mx-3"
              >
              </Disclosure>
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >Материалы</a>
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >Приемущества</a>
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >Учебные материалы</a>
              <!-- <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >Company</a> -->
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >Войти</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>

  </header>
  <slot />
</template>

<script setup>
import { ref } from 'vue'
import { useModalStore } from '../stores/ModalStore'
const modalStore = useModalStore()
import {
  Dialog,
  DialogPanel,
  Disclosure,
  PopoverGroup,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

function showModalReg() {
  modalStore.isVisibleModal = true
  if (modalStore.isVisibleModal == true) {
    const body = document.querySelector('body');
    window.scrollTo(0, 0);
    body.style.overflow = 'hidden';
  }
}


const mobileMenuOpen = ref(false)
</script>

<style lang="scss" scoped></style>