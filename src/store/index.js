import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie'
import loginInfo from '@/api'
Vue.use(Vuex);

const TokenKey = 'loginToken';
const state = {
    token: Cookies.get(TokenKey),
    sidebar: { opened: false }
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
    login(context, userInfo){
        const userData = new Promise((resolve, reject)=>{
            console.log(userInfo);
            loginInfo.loginInfo(userInfo.username, userInfo.password).then((res)=>{
                const data = res.data;
                const tokenStr = data.tokenHead + data.token;
                console.log(tokenStr);
                Cookies.set(tokenStr);
                context.commit('SetToken', tokenStr);
                resolve();
            }).catch(error => {
                reject(error);
            })
        })
        return userData;
    },
}
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;