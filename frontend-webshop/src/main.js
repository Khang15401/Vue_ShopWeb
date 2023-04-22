import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '/node_modules/primeflex/primeflex.css'
import "bootstrap/dist/css/bootstrap.css";
createApp(App).use(router).use(PrimeVue).use(ToastService).use(createPinia()).component('Toast', Toast).mount("#app");
