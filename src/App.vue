<template>
  <div id="app">
    <!-- <router-link to="/" active-class="start" exact class="start-class">始める</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'App',
}
</script>

<style scoped>
  /* .start-class{
    display: none;
  }
  .start{
    display: block;
  } */
</style>
