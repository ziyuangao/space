import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import App from './App.vue'
import router from './router/index.js'
import 'element-plus/dist/index.css'
import './static/css/main.css'
import './static/css/reset.css'

const app = createApp(App).use(router);
app.use(ElementPlus)
app.mount('#app')
