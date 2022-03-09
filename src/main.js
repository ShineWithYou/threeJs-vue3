import { createApp } from 'vue'
import App from './App.vue'
import routerIndex from './router/index'
import store from './store/index'


createApp(App)
.use(routerIndex)
.use(store)
.mount('#app')