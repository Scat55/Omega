<template>
  <div>
    <h1 class="border-b-2 pb-4 text-xl font-bold">Задания</h1>
    <div
      v-for="task in tasks"
      v-if="task"
    >{{ task }}</div>

    <p v-else> Заданий нет</p>
  </div>
</template>

<script setup>


let token;
if (typeof window !== 'undefined') {
  token = typeof window !== 'undefined' ? localStorage.getItem('userToken') : null;
}

const { data: tasks } = await useFetch(`http://localhost:8070/api/getTasksForStudent`, {
  method: 'get',
  headers: {
    Authorization: `Bearer  ${token}`,
    'Content-Type': 'application/json',
  }
})

definePageMeta({
  layout: 'profile'
})
</script>

<style lang="scss" scoped></style>