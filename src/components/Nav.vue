<template>
  <nav>
    <div class="nav-group-button">
        <button class="btn nav-all" @click="getPokemon"> <i class="fas fa-bars"></i> All</button>
        <button class="btn nav-favorite">Favorities</button>
    </div>
  </nav>
</template>

<script>
import axios from 'axios'
export default {
    methods: {
    getPokemon: function () {
      axios.get('https://pokeapi.co/api/v2/pokemon').then(response=>{
         this.$emit('pokemons', response.data.results)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    nav{
        align-items: center;
        background: #fcfcfc;
        box-shadow: 0 -5px 4px rgb(0 0 0 / 5%);
        bottom: 0;
        display: flex;
        height: 100px;
        justify-content: space-around;
        left: 0;
        margin: 0 auto;
        position: fixed;
        right: 0;
        width: 100%;
        z-index: 1;
    }
    .nav-group-button{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem
    }
    .btn{
        font-size: 1.5rem;
        padding: 0.5rem 5rem;
        border-radius: 60px;
        cursor: pointer;
        min-width: 60%;
    }
    .nav-all{
        background-color: red;
        border: none;
        
        color: #ffffff;
    }
    .nav-favorite{
        background-color: #bfbfbf;
        border: none;
        color: #ffffff;
        
    }
    
</style>
