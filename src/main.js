import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import { Lazyload } from 'vant';
Vue.config.productionTip = false;
Vue.use(Lazyload, {
  lazyComponent: true
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
