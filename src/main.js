import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style.scss'
import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/pages/Home.vue"
import About from '@/pages/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About }
    ]
})

const app = createApp(App)
app.use(router)

app.mount('#app')
