<template>
  <Modal v-if="modalActive" @closeModal="setModal($event)"
   :name="name"
   :weight="weight"
   :height="height"
   :types="types"
   :imgPhoto="imgPhoto"
   ></Modal>
  <List v-for="pokemon in pokemons" :key="pokemon.name"
   :namePokemon="firstCapital(pokemon.name)"
   :active="pokemon.favorite"
   @pokemon="getPokemonByName($event)"
   @favorites="favorites($event)"
  ></List>
</template>

<script>
import axios from 'axios'
import List from './List.vue'
import Modal from './Modal.vue'
export default {
  components:{
    List,
    Modal,
  },
   props: [
    "pokemons"
  ],
    data(){
        return {
          modalActive: false,
          name: '',
          weight: '',
          height: '',
          types: '',
          imgPhoto:''
        }
    },
    emits: ["namePokemon"],
    methods:{
      setModal(modal){
        this.modalActive = modal;
      },
      firstCapital(letter){
        const primerCaracter = letter.charAt(0).toUpperCase();
        const restoDeLaCadena = letter.substring(1, letter.length);
        return primerCaracter.concat(restoDeLaCadena);
      },
      getPokemonByName(name){
       this.setModal(true)
          axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response=>{
          this.name = this.firstCapital(response.data.name)
          this.weight = response.data.weight
          this.height = response.data.height
          this.imgPhoto = response.data.sprites?.other?.dream_world?.front_default || ''
          let types = '';
          response.data.types.map((type)=> {
            types = types + this.firstCapital(type.type.name) + ', '
          })
          this.types = types.substring(0, types.length - 2)
          //  this.pokemons = response.data.results
        })
      },
      favorites: function(namePokemon){
        console.log('namePokemon lists', namePokemon)
        this.$emit("namePokemon", namePokemon);
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
