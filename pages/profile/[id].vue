<template>
  <div>
    <h1 class="border-b-2 pb-4 text-xl font-bold">Линый кабинет + {{ id }}</h1>
  </div>
</template>

<script setup>

const { id } = useRoute().params



definePageMeta({
  layout: 'profile'
})
</script>

<style lang="scss" scoped></style>