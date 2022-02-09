<template>
  <div>
    <Started></Started>
  </div>
</template>

<script>
import Started from './components/Started.vue';
export default {
  name: 'App',
  components:{
    Started
  },
}
</script>

<style>
body{
  background-color: #f9f9f9;
  font-family: Lato, sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
