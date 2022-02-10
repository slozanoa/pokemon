<template>
  <nav>
    <div class="nav-group-button">
      <button class="btn nav-all" @click="getPokemon" :class="{active: isActiveAll}">
        <i class="fas fa-bars"></i> All
      </button>
      <button class="btn nav-favorite" @click="getPokemonfavorite" :class="{active: isActiveFavorites}"><i class="fas fa-star"></i>Favorites</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActiveAll:true,
      isActiveFavorites:false
    };
  },
  methods: {
    getPokemon () {
      this.isActiveAll = true;
      this.isActiveFavorites = false;
      this.$emit("pokemons");
    },
    getPokemonfavorite () {
      this.isActiveAll = false;
      this.isActiveFavorites = true;
      this.$emit("pokemonsFavorities");

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
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
.nav-group-button {
  display: grid;
  width: 45%;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  cursor: pointer;
  padding: 11px 20px;
  font-weight: 700;
  font-size: 18px;
  gap:5px
}
.nav-all {
  background-color: #bfbfbf;
  border: none;
  width: 100%;
  color: #ffffff;
  margin-right: 0.7rem;
}
.nav-favorite {
  background-color: #bfbfbf;
  border: none;
  color: #ffffff;
}
.active{
  background-color:#F22539 ;

}
@media only screen and (max-width: 700px) {
  .nav-group-button {
  width: 90%;

}
}
</style>
