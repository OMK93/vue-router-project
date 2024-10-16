import { createApp } from 'vue';
import App from '@/App.vue';
import {createRouter, createWebHistory} from "vue-router";

import Homepage from "@/views/Homepage.vue";
import Contactus from "@/views/Contactus.vue";

const routes = [
    {
        path: '/',
        component: Homepage
    },
    {
        path: '/contact-us',
        component: Contactus
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);

app.use(router);

app.mount('#app');
