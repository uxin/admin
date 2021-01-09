import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/views/login'], resolve),
    },
    {
      path: '/',
      name: 'home',
      redirect: 'home',
      component: resolve => require(['@/views/layout'], resolve),
      children: [{
        path: 'home',
        name: 'home',
        meta: { title: '首页', icon: 'home' },
        component: resolve => require(['@/views/home'], resolve),
      }]
    },
    {
      path: "/sp",
      name: 'sp',
      redirect: '/sp/list',
      meta: { title: '商品', icon: 'sp-list' },
      component: resolve => require(['@/views/layout'], resolve),
      children: [{
        path: "list",
        name: 'list',
        meta: { title: '商品列表', icon: 'sp-list' },
        component: resolve => require(['@/views/sp/product/index'], resolve),
      }, {
        path: "add",
        name: 'add',
        meta: { title: '商品列表', icon: 'sp-add' },
        component: resolve => require(['@/views/sp/product/add'], resolve),
      }]
    }
  ]
})