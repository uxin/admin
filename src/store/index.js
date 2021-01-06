import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    sidebar: { opened: false }
}
const getters = {
    sidebar: state => state.sidebar
}
const mutations = {
    ToggleSideBar: state => state.sidebar.opened = !state.sidebar.opened
}
const actions = {
    ToggleSideBar(context) {
        context.commit('ToggleSideBar')
    }
}
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;