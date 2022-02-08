<template>
  <div>
    <Lists :pokemons="pokemons" @namePokemon="favorites($event)"></Lists>
    <Nav
      @pokemons="getAllPokemonts"
      @pokemonsFavorities="getPokemonfavorite"
    ></Nav>
  </div>
</template>

<script>
import Lists from "./components/Lists.vue";
import Nav from "./components/Nav.vue";

import axios from "axios";
export default {
  data() {
    return {
      pokemons: [],
      copyPokemons: [],
    };
  },
  created() {
    this.getPokemons()
  },
  methods: {

    getPokemons() {
      axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
        console.log(response.data.results);
        this.pokemons = response.data.results;
        this.pokemons = response.data.results.map((pokemon) => {
          return {
            ...pokemon,
            favorite: false,
          };
        });
      });
    },
    favorites(namePokemon) {
      const copyPokemon = this.pokemons.map((pokemon) => {
        const isPokemon =
          pokemon.name.toLowerCase() === namePokemon.toLowerCase();
        if (isPokemon) {
          return {
            ...pokemon,
            favorite: true,
          };
        } else {
          return pokemon;
        }
      });
      this.pokemons = copyPokemon;
      this.copyPokemons = copyPokemon
    },
    getPokemonfavorite() {
      if (this.copyPokemons.length === 0) {
        this.getPokemons()
      }else{
        this.pokemons = this.copyPokemons.filter((copyPokemon)=> copyPokemon.favorite)
      }
    },
    getAllPokemonts(){
      if (this.copyPokemons.length === 0) {
        this.getPokemons()
      }else{
        this.pokemons = this.copyPokemons
      }
    }
  },
  components: {
    Lists,
    Nav,
  },
};
</script>

<style>
body {
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
