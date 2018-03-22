import Vue from 'vue'

import VueRouter from 'vue-router'

import 'bootstrap'

import promise from 'es6-promise'
promise.polyfill();

// for webpack to pack scss
import '../assets/sass/main.scss'

/** Content Component */
import contentComponent from './content-component/Content.vue'

import devManualComponent from './devManual-component/DevManual.vue'
import devManualDescriptionComponent from './devManual-component/DevManual-description.vue'
import devManualRulesComponent from './devManual-component/DevManual-rules.vue'


Vue.use(VueRouter);



const contentRouter = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/devManual', 
            name: 'devManual',
            component: devManualComponent,
            props:true,
            children: [
                {   
                    path: 'description', 
                    name: 'devManualDescription',
                    component:devManualDescriptionComponent,
                    props: true 
                },
                {   
                    path: 'rules', 
                    name: 'devManualRules',
                    component:devManualRulesComponent,
                    props:true
                },
                {   
                    path: '*', 
                    redirect: { path: '/devManual/description' } 
                }
            ],
            redirect: { path: '/devManual/description' } 
        }
    ] 
       
});

contentRouter.beforeEach((to, from, next) => {
    document.title = "Vue 測試";
    next();
});


var content = new Vue({
    el: '#content',
    router:contentRouter,
    components:{
        'content-component':contentComponent
    }
});
