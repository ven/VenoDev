import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/tailwind.css';
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(VueScrollReveal)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
