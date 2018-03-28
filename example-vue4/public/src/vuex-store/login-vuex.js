import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
    strict: false,
    state: {
        usertoken: null,
        login:false
    },
    mutations: {
        changeUserLoginState: function(state, payload) {
            state.usertoken = payload.usertoken;
            if(state.usertoken != null){
                state.login = true;
            }else{
                state.login = false;
            }
        }
    },
    actions: {
        changeUserLoginState: function(context, payload) {
            context.commit('changeUserLoginState', payload);
        }
    },
    getters: {
        login: function(state) {
            return state.login
        },
        usertoken: function(state) {
            return state.usertoken
        }
    }

})

