<template>
  <section class="modal modal--show">
    <div class="modal_container">
      <div class="modal_img">
        <a href="" @click="closeModal($event)" class="modal_close"
          ><img src="../assets/close.svg" alt="" srcset=""
        /></a>
        <img v-bind:src="imgPhoto" alt="" class="modal_pokemon" />
      </div>
      <p class="atribute" id="p1">
        {{ `${name}, ${weight}, ${height}, ${types}` }}
      </p>
      <div class="modal_texts">
        <p class="modal_paragraph">Name: {{ name }}</p>
        <hr />
        <p class="modal_paragraph">Weight: {{ weight }}</p>
        <hr />
        <p class="modal_paragraph">Height: {{ height }}</p>
        <hr />
        <p class="modal_paragraph">Types: {{ types }}</p>
      </div>
      <div class="modal_footer">
        <button @click="copiarAlPortapapeles('p1')">
          {{ this.copited ? "copited to clipboard" : "Share to my friends" }}
        </button>
        <span class="pokemon-favorite" @click="favorites(name)">
          <svg
            v-if="favorite"
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
            v-if="!favorite"
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
    </div>
  </section>
</template>

<script>
export default {
  props: ["name", "weight", "height", "types", "imgPhoto","favorite"],
  data() {
    return {
      copited: false,
    };
  },
  methods: {
    closeModal(e) {
       e.preventDefault()
      this.$emit("closeModal", false);
    },
    copiarAlPortapapeles: function (id_elemento) {
      this.copited = true;
      var aux = document.createElement("input");
      aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
      document.body.appendChild(aux);
      aux.select();
      document.execCommand("copy");
      document.body.removeChild(aux);
      setTimeout(() => {
        this.copited = !this.copited;
      }, 2000);
    },
    favorites (namePokemon) {
      this.$emit("favorites", namePokemon);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  font-family: "Lato", sans-serif;
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
  width: 40%;
  max-height: 90%;
  background-color: #ffffff;
  border-radius: 10px;
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
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 700;
}
.modal_texts {
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
  text-align: start;
}
.modal_img {
  background-image: url("../assets/cover.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 10px 10px 0px 0px;
}
.modal_pokemon {
  width: 100%;
  height: 100px;
}
.modal_close {
  display: inline-block;
  text-decoration: none;
  transition: background-color 0.3s;
  float: right;
  margin: 5px 5px 0 0;
}
.modal_footer {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
button {
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
.atribute {
  display: none !important;
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
  cursor: pointer;
}
@media only screen and (max-width: 700px) {
  .modal_container {
    width: 90%;
  }
}
</style>
