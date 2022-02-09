<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.btn{
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
</style>
