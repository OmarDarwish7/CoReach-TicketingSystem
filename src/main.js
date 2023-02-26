import { createApp } from 'vue'

import router from './router'

import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                         //icons
import Button from 'primevue/button'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.use(PrimeVue);
app.component('Button',Button);

app.mount('#app')
