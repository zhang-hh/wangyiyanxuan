import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible';
import { Lazyload } from 'vant';
Vue.config.productionTip = false;
import waterfall from 'vue-waterfall2'
Vue.use(waterfall);
Vue.use(Lazyload, {
  lazyComponent: true
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
