import { createApp } from "vue"
import App from './App.vue'
import Bottle from 'bottle414-npm-test'

const app = createApp(App)
app.use(Bottle)
app.mount('#app')