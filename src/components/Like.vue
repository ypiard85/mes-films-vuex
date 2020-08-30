<template>
    <div>
        <button v-if="!isLiked" class="material-icons" @click="toggleLiked" >
            favorite_border
        </button>        
        <button v-else class="material-icons" @click="toggleLiked" >
            favorite
        </button>        
    </div>
</template>

<script>
    export default{
        props:{
            film:{
                type: Object,
                default: null            
            }
        },

        data(){
            return{
                isLiked: false
            }
        },

        mounted(){
            this.isLiked = this.film.liked
        },


        methods:{
            toggleLiked(){
                this.isLiked = !this.isLiked
                this.film.liked = this.isLiked
                this.$store.dispatch("updateMovie", this.film)
            }
        }
    }
</script>

<style scoped>
    button{
        cursor: pointer;
        background-color: transparent;
        border: none;
    }
</style>

