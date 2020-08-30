<template>
  <div class="container">
    <h1>Liste des films</h1>
    <div class="row">
      <div v-for="(film,index) in films" :key="index" class="col s12 m4" >
        <films-item :film="film" />
        
      </div>
    </div>

  </div>
</template>
  
<script>
 
  import FilmsItem from '@/components/FilmsItem' 


  export default {

    name: 'Home',

    components:{
      FilmsItem
    },

    data(){
      return{
        films: this.$store.state.films.films
      }
    },

    head: {
    // To use "this" in the component, it is necessary to return the object through a function
    title: function () {
      return {
        inner: this.title
      }
    },
    meta: [
      { name: 'description', content: 'My description', id: 'desc' }
    ]
  }
  
  
}




</script>

<style>
  img{
    max-height: 500px;
  }
</style>