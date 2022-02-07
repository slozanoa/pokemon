<template>
  <div>
    <Main></Main>
  </div>
</template>

<script>
import Main from './Main.vue';
export default {
  name: 'App',
  components:{
    Main
  },
}
</script>

<style>
body{
  background-color: #f9f9f9;
  font-family: 'Poppins', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
