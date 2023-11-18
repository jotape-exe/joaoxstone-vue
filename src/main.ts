import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { DatePicker } from 'ant-design-vue'
import router from './router/router'

const pinia  = createPinia()


createApp(App).use(DatePicker).use(router).use(pinia).mount('#app')
