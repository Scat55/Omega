<template>
  <div class="profile">
    <!-- TODO: Переделать через массив (Запрос Коля) -->
    <div v-for="(value, key, idx) of user">
      <div
        v-if="idx === 0"
        class="grid grid-cols-2"
      >
        <div>
          <!-- {{ value }} -->
          <p class="mt-7 "><span class="font-bold">Имя:</span> {{ value.first_name }} </p>
          <p class="mt-7 "><span class="font-bold">Фамилия:</span> {{ value.last_name }} </p>
          <p class="mt-7 "><span class="font-bold">Почта:</span> {{ value.email }} </p>

        </div>
        <div>
          <p class="mt-7 "><span class="font-bold">Тип:</span> {{ value.type_user }} </p>
          <p class="mt-7">Кол-во решшенных задач</p>
          <p class="mt-7">Баланс: <span class="font-bold pl-4">10</span> OmegaCoin</p>
        </div>
      </div>
    </div>
    <div>
    </div>

  </div>
</template>

<!-- <div
          v-for="item in value"
          
        >
          {{ item }}
          <div>
            <p class="mt-7">Имя: {{ item }} </p>
            <p class="mt-7">Фамилия: </p>
          </div>
          <div>
            <p class="mt-7">Кол-во решшенных задач</p>
            <p class="mt-7">Баланс: <span class="font-bold pl-4">10</span> OmegaCoin</p>
          </div>
        </div> -->
<script setup>
const { user } = defineProps(['user'])

</script>

<style lang="scss" scoped></style>