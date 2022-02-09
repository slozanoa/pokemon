<template>
  <div class="container">
    <div class="container-data">
      <img src="../assets/pikachu.svg" alt="" />
      <h1>Welcome to Pokédex</h1>
      <p class="typography">
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
      <button class="btn">
          Get started
        </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 0 auto;
  max-height: 100vh;
  max-width: 570px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.container-data {
  text-align: center;
}
.typography {
  font-size: 18px;
  font-weight: 500;
  margin: 30px 0 50px 0;
}
.btn {
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 700;
  background: #f22539;
  border-radius: 60px;
  padding: 11px 20px;
  color: #ffffff;
  border: none;
  cursor: pointer;
}
h1{
    margin-top: 40px;
}
</style>
