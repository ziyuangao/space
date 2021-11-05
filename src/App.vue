<script setup>
import MenuList from "./components/common/menuList.vue";
</script>

<template>
  <MenuList />
  <router-view />
</template>

<style>
#app {
  /* font-family: "webfont", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
