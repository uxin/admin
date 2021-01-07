import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie'
import api from '@/api'
Vue.use(Vuex);

const TokenKey = 'loginToken';
const state = {
    sidebar: { opened: false },
    token: Cookies.get(TokenKey)
}
const getters = {
    sidebar: state => state.sidebar,
    token: state => state.token,
}
const mutations = {
    ToggleSideBar: state => state.sidebar.opened = !state.sidebar.opened,
    SetToken: (state, token) => state.token = token
}
const actions = {
    toggleSideBar(context) {
        context.commit('ToggleSideBar');
    },
    // 登录
    login(context, userInfo) {
        const userData = new Promise((resolve, reject) => {
            api.loginInfo(userInfo.username, userInfo.password).then((res) => {
                const data = res.data;
                const tokenStr = data.tokenHead + data.token; // 获取token
                Cookies.set(tokenStr);
                context.commit('SetToken', tokenStr);
                resolve();
            }).catch(error => {
                reject(error);
            })
        })
        return userData;
    },
    // 退出登录
    logout(context){
        const logoutData = new Promise((resolve, reject)=>{
            api.logout(context.state.token).then((res)=>{
                context.commit("SetToken","");
                Cookies.remove(TokenKey)
                resolve();
            }).catch((error)=>{
                reject(error);
            })
        })
        return logoutData;
    }
}
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;