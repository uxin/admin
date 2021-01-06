import Vue from 'vue'
import directive from "@/core/directive";
import global from "@/core/global";
import api from '@/api';
export default (Vue)=>{
    directive(Vue);
    Vue.prototype.$global = global;
    Vue.prototype.$api = api;
    Vue.prototype.$eventHub = new Vue();
}