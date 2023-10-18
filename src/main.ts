import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { DatePicker } from 'ant-design-vue'

const pinia  = createPinia()

createApp(App).use(DatePicker).use(pinia).mount('#app')
