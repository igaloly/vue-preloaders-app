import Vue from 'vue';
// preloaders plugin
import Preloaders from '../node_modules/vue-preloaders/dist/vue-plugin';
import App from './App.vue';
// import colors


// import global css
import './styles/main.scss';

Vue.config.productionTip = false;

// preloaders plugin initialization
Vue.use(Preloaders);

new Vue({
  render: h => h(App),
}).$mount('#app');
