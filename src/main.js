import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import './assets/css/global.css'

const app = createApp(App)
.use(router)
.use(store)
.use(PerfectScrollbar)

app.mount('#app')
