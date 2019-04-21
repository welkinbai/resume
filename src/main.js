import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Layout from 'bootstrap-vue/es/components/layout'
import Card from 'bootstrap-vue/es/components/card'
import Image from 'bootstrap-vue/es/components/image'

Vue.use(Layout)
Vue.use(Card)
Vue.use(Image)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
