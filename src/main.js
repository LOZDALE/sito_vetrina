import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/global.css'
import 'primeicons/primeicons.css'
import 'animate.css'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.dark'
        }
    }
})
app.use(ToastService)

app.mount('#app')
