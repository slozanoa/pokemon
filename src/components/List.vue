<template>
  <div class="pok-card" @click="geyByIdPokemon(namePokemon)">
    <h2>{{ namePokemon }}</h2>
    <span class="pokemon-favorite" @click="favorites(namePokemon)">
      <svg
        v-if="active"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6052 0.904438L8.43178 7.62704L1.33161 8.70855C0.0583408 8.9015 -0.451939 10.5415 0.471424 11.4809L5.60824 16.7107L4.39329 24.0984C4.1746 25.4338 5.52076 26.4341 6.64824 25.8096L13 22.3213L19.3518 25.8096C20.4792 26.429 21.8254 25.4338 21.6067 24.0984L20.3918 16.7107L25.5286 11.4809C26.4519 10.5415 25.9417 8.9015 24.6684 8.70855L17.5682 7.62704L14.3948 0.904438C13.8262 -0.293851 12.1787 -0.309084 11.6052 0.904438Z"
          fill="#ECA539"
        />
      </svg>
       <svg
       v-if="!active"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6052 0.904438L8.43178 7.62704L1.33161 8.70855C0.0583408 8.9015 -0.451939 10.5415 0.471424 11.4809L5.60824 16.7107L4.39329 24.0984C4.1746 25.4338 5.52076 26.4341 6.64824 25.8096L13 22.3213L19.3518 25.8096C20.4792 26.429 21.8254 25.4338 21.6067 24.0984L20.3918 16.7107L25.5286 11.4809C26.4519 10.5415 25.9417 8.9015 24.6684 8.70855L17.5682 7.62704L14.3948 0.904438C13.8262 -0.293851 12.1787 -0.309084 11.6052 0.904438Z"
          fill="#BFBFBF"
        />
      </svg>
    </span>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  props: ["namePokemon","active"],
   emits: ["pokemon"],
  methods: {
    geyByIdPokemon: function (name) {
      this.$emit("pokemon", name.toLowerCase());
    },
    favorites (namePokemon) {
      console.log('list', namePokemon);
      this.$emit("favorites", namePokemon);
    },
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pok-card {
  background-color: #ffffff;
  padding: 5px;
  margin: 0 auto;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pokemon-favorite {
  background-color: #f5f5f5;
  width: 44px;
  height: 44px;
  color: #bfbfbf;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}
.pokemon-activa {
  color: #eca539;
}

</style>
