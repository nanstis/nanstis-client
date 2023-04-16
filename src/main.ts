
import { createApp } from 'vue'
import { routes } from '@/router'
import { createRouter, createWebHistory } from 'vue-router';

import '@assets/styles/main.css'
import App from '@Components/AppComponent.vue'

const router = createRouter({
    history: createWebHistory(),
    routes,
});


createApp(App).use(router)
    .mount('#app')
