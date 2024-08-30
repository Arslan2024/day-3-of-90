import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import BootStrap from './components/BootStrap.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: BootStrap },
        { path: '/BootStrap', component: BootStrap }
    ]
});

createApp(App).use(router).mount('#app');
