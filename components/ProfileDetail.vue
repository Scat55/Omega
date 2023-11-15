<template>
  <div class="profile">
    <!-- TODO: Переделать через массив (Запрос Коля) -->
    <div v-for="(value, key, idx) of user">
      <div v-if="idx === 1">
        <div
          v-for="item in value"
          class="grid grid-cols-2"
        >
          <div>
            <p class="mt-7">Имя: {{ item }} </p>
            <p class="mt-7">Фамилия: </p>
          </div>
          <div>
            <p class="mt-7">Кол-во решшенных задач</p>
            <p class="mt-7">Баланс: <span class="font-bold pl-4">10</span> OmegaCoin</p>
          </div>
        </div>

      </div>
    </div>
    <div>
    </div>

  </div>
</template>

<script setup>
const { user } = defineProps(['user'])

</script>

<style lang="scss" scoped></style>