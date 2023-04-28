
import { createApp } from 'vue'
import { routes } from '@/router'
import { createRouter, createWebHistory, Router } from "vue-router";

import '@assets/styles/main.css'
import AppComponent from '@Components/AppComponent.vue'

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(AppComponent).use(router)
    .mount('#app')
