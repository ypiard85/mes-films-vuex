import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueHead from 'vue-head'

createApp(App).use(store).use(router).use(VueHead).mount('#app')
