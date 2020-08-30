import filmDb from '@/config/films.data'

export default {

    state: {
      films: [],
    },
    mutations: {
      SET_MOVIES(state, film){
        state.films = film
      },
  
      UPDATE_MOVIE(state, film){
        state.films = state.films.map(Element => {
          if(Element.slug === film.slug){
            Element = film
          }
          return Element
        })
      }
    },
  
    actions: {
      fetchMovie( {commit} ){
        const films = filmDb
        commit('SET_MOVIES', films )
      },
  
      updateMovie( {commit}, film ){
        commit("UPDATE_MOVIE", film)
      }
    },

    getters:{
      getMovies: (state) => (slug) => {
        const film = state.films.filter(
          (Element) => Element.slug === slug
          )
        console.log(film[0])
        return film[0]
      }
    }
}