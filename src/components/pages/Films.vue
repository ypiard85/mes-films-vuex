<template>
    <div class="container" style="margin-top: 100px;">            
        <div class="row">
            <div class="col m4">
                <img :src="film.image" :alt="film.name">
            </div>
            <div class="col m6">
                <h4>{{film.name}}</h4>
                <p> {{ film.resume}} </p>
                <router-link to="/" class="btn btn-small blue">Retour à l'accueil</router-link>
                <p> <Like :film="film" /> </p>
            </div>
        </div>

    </div>
</template>
    
  <script>
    
    import Like from '@/components/Like'

    export default {
      name: 'Home',
        
      components:{
          Like
      },

      data(){
          return{
              film: '',

          }
      },

      created(){
        const id = this.$route.params.id
        
        this.film = this.$store.getters.getMovies(id)




      }
    }
  
  </script>