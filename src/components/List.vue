<template>
<div class="pok-card" @click="geyByIdPokemon(namePokemon)">
    <h2>{{namePokemon}}</h2>
</div>
</template>

<script>
// import axios from 'axios'
export default {
  methods: {
    geyByIdPokemon: function (name) {
      this.$emit('pokemon', name.toLowerCase())
    },
  },
  props: [
    "namePokemon"
  ],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pok-card{
    background-color: #ffffff;
    padding: 5px;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 10px;
    cursor:pointer;
    }
</style>
