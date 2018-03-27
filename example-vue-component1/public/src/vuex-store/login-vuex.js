import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export const loginModule = {
    strict: false,
    namespaced: true,
    state: {
        usertoken: '',
        login:false
    },
    mutations: {
        changeUsertokenState: function(state, payload) {
            state.usertoken = payload.usertoken;
            if(state.usertoken == null || state.usertoken.length === 0){
                state.login = false;
            }else{
                state.login = true;
            }
        }
    },
    actions: {
        changeUsertokenState: function(context, payload) {
            context.commit('changeUsertokenState', payload);
        }
    },
    getters: {
        userAuthkey: function(state) {
            return state.userAuthkey
        },
        login: function(state) {
            return state.login
        }

    }
}

export const loginStore = new Vuex.Store({
    modules: {
        login:loginModule
    }
});
