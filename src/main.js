import Vue from 'vue';
// preloaders plugin
import VuePreloaders from 'vue-preloaders';
import App from './App.vue';

// import global css
import './styles/main.scss';

Vue.config.productionTip = false;

// preloaders plugin initialization
Vue.use(VuePreloaders);

new Vue({
  render: h => h(App),
}).$mount('#app');
