import Vue from 'vue'
import Vuex from 'vuex'

import {loginModule} from './login-vuex'


Vue.use(Vuex);

const devManualModule = {
    strict: false,
    namespaced: true,
    state: {
        pageType: ''
    },
    mutations: {
        changePageType: function(state, payload) {
            state.pageType = payload.pageType;
        }

    },
    actions: {
        changePageType: function(context, payload) {
            context.commit('changePageType', payload);
        }
    },
    getters: {
        pageType: function(state) {
            return state.pageType;
        }
    }
}


export const devManualStore = new Vuex.Store({
    modules: {
        devManual:devManualModule,
        login:loginModule
    }
});
