import Vue from 'vue';
import VuePreloaders from 'vue-preloaders';
import VueMeta from 'vue-meta';
import App from './App.vue';

// import global css
import './styles/main.scss';

Vue.config.productionTip = false;

Vue.use(VuePreloaders);
Vue.use(VueMeta);

new Vue({
  render: h => h(App),
}).$mount('#app');
