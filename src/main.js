import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/tailwind.css';
import VueScrollReveal from 'vue-scroll-reveal';
import VuePageTransition from 'vue-page-transition';
import VueCarousel from 'vue-carousel';
import VueKinesis from 'vue-kinesis'

Vue.use(VueKinesis)
Vue.use(VuePageTransition)
Vue.use(VueScrollReveal)
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
