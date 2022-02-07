<template>
  <div>
    <Lists :pokemons="pokemons"></Lists>
    <Nav @pokemons="pokemons = $event"></Nav>
  </div>
</template>

<script>
import Lists from './components/Lists.vue'
import Nav from './components/Nav.vue'

import axios from 'axios'
export default {
  data(){
        return {
            pokemons: [],
        }
  },
  created() {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(response=>{
          console.log(response.data.results)
            this.pokemons = response.data.results
        })
    },
  components:{
    Lists,
    Nav,

  },
}
</script>

<style>
body{
  background-color: #f9f9f9;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
