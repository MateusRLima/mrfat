import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import TitlesComponent from "@/components/TitlesComponent.vue"

Vue.component(TitlesComponent)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
