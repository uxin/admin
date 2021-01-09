// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI, { Form } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import core from "@/core/core.config.js";
import '@/css/index.scss';
import 'font-awesome/css/font-awesome.css';
import store from '@/store';
import '@/icons';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(core);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
