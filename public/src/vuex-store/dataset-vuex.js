import Vue from 'vue'
import Vuex from 'vuex'


import {loginModule} from './login-vuex'

Vue.use(Vuex);

const datasetModule = {
    strict: false,
    namespaced: true,
    state: {
        datasetType:'',
        datasetList: [],
        datasetPage:[],
        datasetMetadata:{},
        previousPage:1,
        search:'',
        searchDatasetList:[],
        searchAllDatasetList:[]
    },
    mutations: {
        changeDatasetType: function(state, payload) {
            state.datasetType = payload.datasetType;
        },
        changeDatasetList: function(state, payload) {
            state.datasetList = payload.datasetList;
        },
        changeDatasetPage: function(state, payload) {
            state.datasetPage = payload.datasetPage;
        },
        changeDatasetMetadata: function(state, payload) {
            state.datasetMetadata = payload.datasetMetadata;
        },
        changePreviousPage:function(state, payload){
            state.previousPage = payload.previousPage;
        },
        removeDatasetMetadata: function(state){
            state.datasetMetadata = {};
        },
        changeSearchState: function(state, payload){
            state.search = payload.search;
            state.searchDatasetList = payload.searchDatasetList;
        },
        setSearchAllDatasetList:function(state, payload){
            state.searchAllDatasetList = payload.searchAllDatasetList;
        }
    },
    actions: {
        changeDatasetType: function(context, payload) {
            context.commit('changeDatasetType', payload);
        },
        changeDatasetList: function(context, payload) {
            context.commit('changeDatasetList', payload);
        },
        changeDatasetPage: function(context, payload) {
            context.commit('changeDatasetPage', payload);
        },
        changeDatasetMetadata: function(context, payload) {
            context.commit('changeDatasetMetadata', payload);
        },
        changePreviousPage: function(context, payload) {
            context.commit('changePreviousPage', payload);
        },
        removeDatasetMetadata: function(context){
            context.commit('removeDatasetMetadata');
        },
        changeSearchState: function(context, payload){
            context.commit('changeSearchState', payload);
        },
        setSearchAllDatasetList:function(context, payload){
            context.commit('setSearchAllDatasetList', payload);
        }
    },
    getters: {
        datasetType: function(state) {
            return state.datasetType;
        },
        datasetList: function(state) {
            return state.datasetList;
        },
        datasetPage: function(state) {
            return state.datasetPage;
        },
        datasetMetadata: function(state) {
            return state.datasetMetadata;
        },
        previousPage:function(state){
            return state.previousPage;
        },
        search:function(state){
            return state.search;
        },
        searchDatasetList:function(state){
            return state.searchDatasetList;
        },
        searchAllDatasetList:function(state){
            return state.searchAllDatasetList;
        }
    }
}


export const datasetStore = new Vuex.Store({
    modules: {
        dataset:datasetModule,
        login:loginModule
    }
});
