<template>
    <div>            
              <div class="card">
                <div class="card-image">
                  <img :src="film.image" :alt="film.name" >
                  <span class="card-title black-text"><h2> {{film.name}} </h2></span>
                </div>
                <div class="card-action">
                  <router-link :to=" '/film/'+film.slug" class="btn blue">voir plus</router-link>
                  <p> <Like :film="film" /> </p>
                </div>
              </div>
            
    </div>
</template>


<script>
    import Like from '@/components/Like'
    export default{
        components:{
            Like
        },
        props:{
            film: {
                type: Object,
                default: null            
            }
        }
    }
</script>


<style scoped>
.card{
    margin: 2em;
}
</style>
