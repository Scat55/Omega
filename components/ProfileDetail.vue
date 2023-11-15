<template>
  <div class="profile">

    <div class="grid grid-cols-2">
      <div>
        <p class="mt-7">Имя</p>
        <p class="mt-7">Фамилия</p>
      </div>
      <div>
        <p class="mt-7">Кол-во решшенных задач</p>
        <p class="mt-7">Баланс: <span class="font-bold pl-4">10</span> OmegaCoin</p>
      </div>
    </div>

  </div>
</template>

<script setup>
const { data } = useFetch('http://localhost:8070/api/user_list')
console.log(data.value)
</script>

<style lang="scss" scoped></style>