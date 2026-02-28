import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'

// Import global components if needed
import TitlesComponent from "@/components/TitlesComponent.vue"

import i18n from './plugins/i18n'

const app = createApp(App)

app.component('TitlesComponent', TitlesComponent)

app.use(vuetify)
app.use(i18n)

app.mount('#app')
