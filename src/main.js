import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import App from './App.vue'
import { ModalPlugin, ButtonPlugin, CardPlugin, ImagePlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)
Vue.use(ModalPlugin)
Vue.use(ButtonPlugin)
Vue.use(ImagePlugin)
// Install BootstrapVue
Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
