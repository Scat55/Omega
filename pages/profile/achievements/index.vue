<template>
  <div>
    <h1 class="border-b-2 pb-4 text-xl font-bold">Достижения</h1>
    {{ data }}
  </div>
</template>

<script setup>
const { data } = useFetch('http://localhost:3001/test')

definePageMeta({
  layout: 'profile'
})
</script>

<style lang="scss" scoped></style>