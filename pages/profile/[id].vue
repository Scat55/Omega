<template>
  <div class="profile">
    <div class="container">
      <h1 class=" border-b-2 pb-4 text-xl font-bold">Линый кабинет </h1>

      <ProfileDetail :user="user" />

    </div>
  </div>
</template>

<script setup>
import axios from 'axios'

let userID;
let token;
if (typeof window !== 'undefined') {
  userID = typeof window !== 'undefined' ? localStorage.getItem('userID') : null;
}
if (typeof window !== 'undefined') {
  token = typeof window !== 'undefined' ? localStorage.getItem('userToken') : null;
}

const { data: user } = await useFetch(`http://localhost:8070/api/user_inf/${userID}`, {
  method: 'get',
  headers: {
    Authorization: `Bearer  ${token}`,
    'Content-Type': 'application/json',
  }
})

await axios.get(`http://localhost:8070/api/user_inf/${userID}`, {
  headers: {
    Authorization: `Bearer  ${token}`,
    'Content-Type': 'application/json',
  }
}).then(res => {
  console.log(res.data)
})

definePageMeta({
  layout: 'profile'
})
</script>

<style lang="scss" scoped></style>