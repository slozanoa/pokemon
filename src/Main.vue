<template>
  <div class="h-screen">
    <Loading v-if="loading"></Loading>
    <div v-if="!loading" class="lists-pokemon">
      <div class="input-searh">
        <svg
          class="svg-searh"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7552 15.5622L14.2499 12.0574C14.0917 11.8992 13.8772 11.8113 13.6522 11.8113H13.0791C14.0495 10.5705 14.6261 9.00967 14.6261 7.31179C14.6261 3.27273 11.3528 0 7.31304 0C3.27329 0 0 3.27273 0 7.31179C0 11.3508 3.27329 14.6236 7.31304 14.6236C9.01121 14.6236 10.5723 14.0471 11.8134 13.0768V13.6498C11.8134 13.8748 11.9013 14.0892 12.0595 14.2474L15.5648 17.7522C15.8953 18.0826 16.4297 18.0826 16.7567 17.7522L17.7517 16.7573C18.0822 16.4269 18.0822 15.8926 17.7552 15.5622ZM7.31304 11.8113C4.82731 11.8113 2.81271 9.80061 2.81271 7.31179C2.81271 4.82648 4.82379 2.81223 7.31304 2.81223C9.79876 2.81223 11.8134 4.82297 11.8134 7.31179C11.8134 9.79709 9.80228 11.8113 7.31304 11.8113Z"
            fill="#BFBFBF"
          />
        </svg>
        <input type="text" placeholder="Searh" class="searh" v-model="search" />
      </div>

      <Lists
        v-if="searchPokemons"
        :pokemons="pokemons"
        @namePokemon="favorites($event)"
      ></Lists>
      <div v-if="!searchPokemons" class="uh-oh">
        <h1>Uh-oh!</h1>
        <p>You look lost on your journey!</p>
        <button class="btn" @click="goToBack">Go back home</button>
      </div>
    </div>
    <Nav
    v-if="!loading"
      @pokemons="getAllPokemonts"
      @pokemonsFavorities="getPokemonfavorite"
    ></Nav>
  </div>
</template>

<script>
import Lists from "./components/Lists.vue";
import Nav from "./components/Nav.vue";
import Loading from "./components/Loading.vue";

import axios from "axios";
export default {
  components: {
    Lists,
    Nav,
    Loading,
  },
  data() {
    return {
      pokemons: [],
      copyPokemons: [],
      search: "",
      searchPokemons: true,
      loading: false,
    };
  },
  watch: {
    search: function (value) {
      console.log("pokemon", value);
      console.log("a", this.pokemons);
      this.pokemons = this.copyPokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(value.toLowerCase());
      });
      this.searchPokemons = this.pokemons.length > 0 ? true : false;
    },
  },
  created() {
    this.getPokemons();
  },
  methods: {
    getPokemons() {
      this.loading = true;
      axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
          this.pokemons = response.data.results;
          this.pokemons = response.data.results.map((pokemon) => {
            return {
              ...pokemon,
              favorite: false,
            };
          });
          this.copyPokemons = this.pokemons;
          this.loading = true;
          this.searchPokemons= true
        })
        .catch(function (error) {
          console.log(error);
          this.loading = false;
        });
    },
    favorites(namePokemon) {
      this.pokemons  = this.pokemons.map((pokemon) => {
        const isPokemon =
          pokemon.name.toLowerCase() === namePokemon.toLowerCase();
        if (isPokemon) {
          return {
            ...pokemon,
            favorite: !pokemon.favorite,
          };
        } else {
          return pokemon;
        }
      });
      // this.pokemons = copyPokemon;
      this.copyPokemons =  this.pokemons ;
    },
    getPokemonfavorite() {
      if (this.copyPokemons.length === 0) {
        this.getPokemons();
      } else {
        this.pokemons = this.copyPokemons.filter(
          (copyPokemon) => copyPokemon.favorite
        );
      }
      this.searchPokemons = this.pokemons.length > 0 ? true : false;
    },
    getAllPokemonts() {
      if (this.copyPokemons.length === 0 || this.pokemons.length === 0) {
        this.getPokemons();
      } else {
        this.pokemons = this.copyPokemons;
      }
    },
    goToBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
body {
  font-family: Lato, sans-serif;
  background-color: #f9f9f9;
  margin: 0;
  background-color: #f9f9f9;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.lists-pokemon {
  overflow: auto;
  width: 50%;
  margin: 0 auto;
  height: 75%;
}
.input-searh {
  width: 100%;
  display: flex;
  align-content: center;
}
.searh {
  height: 50px;
  width: 100%;
  margin-bottom: 10px;
  display: block;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  color: #353535;
  font-family: "Montserrat", sans-serif;
}
.svg-searh {
  margin-top: 16px;
}
@media only screen and (max-width: 600px) {
  .lists-pokemon {
    width: 90%;
  }
}
</style>
