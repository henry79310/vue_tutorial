<template>
    <div class="wrapper">
        <main>
            <!-- breadcrumbs -->
            <div class="breadcrumbs" id="topicAnchor">
                <div class="container">
                    <ul class="breadcrumb">
                        <li><a href="/index"><i class="icon-home"></i></a></li>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <li><a href="">開發指南</a></li>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <li class="active">{{pageTypeName}}</li>
                    </ul>
                </div>
                <!--/container-->
            </div>
            <!-- end breadcrumbs -->
            <div class="container">
                <div class="row">
                    <!-- Begin Sidebar Menu -->
                    <dev-manual-sidebar-component v-bind:pageTypeChild="pageType" v-on:changeDevManualPageChild="changeDevManualPage"></dev-manual-sidebar-component>
                    <!-- End Sidebar Menu -->

                    <router-view></router-view> 
                    
                    <!-- Using keep-alive to switch components-->
                    <!-- <keep-alive>
                        <dev-manual-description-component v-bind:is="currentView" v-bind:userLoginStatusChild="userLoginStatus" v-on:userlogout="userLogout"></dev-manual-description-component>
                        <dev-manual-rules-component v-bind:is="currentView"></dev-manual-rules-component>
                    </keep-alive> -->   
                    <!-- Using v-show to switch components -->
                    <!-- <dev-manual-description-component v-show="pageType == 'description'" v-bind:userLoginStatusChild="userLoginStatus" v-on:userLogoutChild="userLogout"></dev-manual-description-component>
                    <dev-manual-rules-component v-show="pageType == 'rules'"></dev-manual-rules-component> -->
                </div>
            </div>
        </main>
        <!-- footer -->
        <footer id="footer-v3" class="footer-v3">
            <footer-component></footer-component>
        </footer>
        <!--end footer -->
        <!-- 會員登入 -->
        <div class="modal fade " id="userLogin" tabindex="-1 " role="dialog " aria-labelledby="myModalLabel " aria-hidden="true ">
            <!-- <user-login-component v-on:userLoginChild="userLogin"></user-login-component> -->
            <user-login-component></user-login-component>
        </div>
        <!--ＥＮＤ 會員登入 -->
    </div>

</template>
<script>


import Vue from 'vue'
import VueRouter from 'vue-router'

import devManualSidebarComponent from './DevManual-sidebar.vue'
import devManualDescriptionComponent from './DevManual-description.vue'
import devManualRulesComponent from './DevManual-rules.vue' 

import userLoginComponent from '../user-login-component/User-login.vue'

import loginVuex from '../vuex-store/login-vuex.js';

import footerComponent from '../footer-component/Footer.vue'


const pagesType = [{ type: 'description', typeName: '使用說明', viewName:'dev-manual-description-component' },
                 { type: 'rules', typeName: '使用規範', viewName:'dev-manual-rules-component' }];


Vue.use(VueRouter);


const devManualRouter = new VueRouter({
    mode: 'history',
    routes: [            
        {   
            path: '/devManual/description', 
            name: 'description',
            component:devManualDescriptionComponent,
            props: { userloginstatus: false }
        },
        {   
            path: '/devManual/rules', 
            name: 'rules',
            component:devManualRulesComponent,
            props:true
        }
    ] 
});



devManualRouter.beforeEach((to, from, next) => {
    /* console.log(to); */
    next();
});

export default {
    store:loginVuex,
    router:devManualRouter,
    data: function(){
        return {
            pageType: '',
            userLoginStatus:false
        }
    },
    computed:{
        pageTypeName:function(){
            for(let i = 0; i < pagesType.length; i++){
                if(pagesType[i].type === this.pageType){
                    return pagesType[i].typeName;
                }
            } 
        },
        currentView:function(){
            for(let i = 0; i < pagesType.length; i++){
                if(pagesType[i].type === this.pageType){
                    return pagesType[i].viewName;
                }
            } 
        }
    },
    components: {
        'dev-manual-sidebar-component': devManualSidebarComponent,
        /*'dev-manual-description-component': devManualDescriptionComponent,
        'dev-manual-rules-component': devManualRulesComponent,*/
        'user-login-component':userLoginComponent,
        'footer-component':footerComponent
    }, 
    methods:{
        changeDevManualPage:function(pagetype){
            this.pageType = pagetype;
        },
        userLogin:function(userLoginStatus){
            this.userLoginStatus = userLoginStatus;
        },
        userLogout:function(){
            this.userLoginStatus = false;
        }
    },
    watch:{
      $route:function(){
        /* console.log(this.$route); */
        this.pageType = this.$route.name;
      }  
    },
    created:function(){

       // this.pageType = 'description';
        this.pageType = this.$route.name;

        if(document.cookie){
            /* this.userLoginStatus = true; */
            this.$store.dispatch({
                type:'changeUserLoginState',
                usertoken: document.cookie
            });
        }
    }
}
</script>



