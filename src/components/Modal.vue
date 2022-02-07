<template>
  <section class="modal modal--show">
    <div class="modal_container">
    <div class="modal_img">
        <img v-bind:src="imgPhoto" alt="" class="modal_pokemon" />
    </div>
      <div class="modal_texts">
        <p class="modal_paragraph">Name: {{name}}</p>
        <hr />
        <p class="modal_paragraph">Weight: {{weight}}</p>
        <hr />
        <p class="modal_paragraph">Height: {{height}}</p>
        <hr />
        <p class="modal_paragraph">Types: {{types}}</p>
        <a href="#" class="modal_close" @click="closeModal">Cerrar</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
     props: [
        "name",
        "weight",
        "height",
        "types",
        "imgPhoto"
  ],
  data() {
            return {
                image: {backgroundImage:  `url(${require('./cover.png')})`}
            };
        },
  methods: {
    closeModal: function () {
      this.$emit("closeModal", false);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  font-family: 'Poppins', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #111111bd;
  display: flex;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s 0.9s;
  --transform: translateY(-100vh);
  --transition: transform 0.8s;
}
.modal--show {
  opacity: 1;
  pointer-events: unset;
  transition: opacity 0.6s;
  --transform: translateY(0);
  --transition: transform 0.8s 0.8s;
  z-index: 5;
}
.modal_container {
  margin: auto;
  width: 60%;
  max-height: 90%;
  background-color: #ffffff;
  border-radius: 6px;
  grid-auto-columns: 100%;
  transform: var(--transform);
  transition: var(--transition);
}
.modal_title {
  font-size: 2.5rem;
}
.modal_paragraph {
  margin-bottom: 10px;
  margin-left: 10px;
}
.modal_texts{
    width: 90%;
    margin: 0 auto;
    padding: 1rem 0;
}
.modal_img {
    background-image: url('./cover.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.modal_pokemon{
    width: 100%;
    height: 100px;
}
.modal_close {
  display: inline-block;
  text-decoration: none;
  color: #fff;
  background-color: #f26250;
  padding: 1em 3em;
  border: 1px border;
  border-radius: 6px;
  font-weight: 300;
  transition: background-color 0.3s;
}
.modal_close:hover {
  color: #f26250;
  background-color: #fff;
}
</style>
