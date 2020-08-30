import { createStore } from 'vuex'

import films from '@/store/modules/films'

export default createStore({
  modules: {
    films
  }
})
