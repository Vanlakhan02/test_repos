<script setup>
import {RouterView} from "vue-router"

</script>

<template>
<main class="links">
  <RouterLink active-class="active" to="/">Home</RouterLink>
  <RouterLink active-class="active" to="/about">about</RouterLink>
  <RouterView />
</main>
</template>

<style scoped>
    .links a{
      margin-left: 10px
    }

    .active{
      font-weight: bold;
      color:green;
    }
</style>>


