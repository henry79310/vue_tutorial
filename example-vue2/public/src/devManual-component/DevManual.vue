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
                    <div class="col-md-3">
                        <ul class="list-group sidebar-nav-v1" id="sidebar-nav">
                            <!-- 資料清單 -->
                            <li class="list-group-item" v-bind:class="{active:pageType === 'description'}">
                                <a href="#" v-on:click="changeDevManualPage('description')">使用說明</a>
                            </li>
                            <li class="list-group-item" v-bind:class="{active:pageType === 'rules'}">
                                <a href="#" v-on:click="changeDevManualPage('rules')">使用規範</a>
                            </li>
                            <!-- End 資料清單 -->
                        </ul>
                    </div>
                    <!-- End Sidebar Menu -->
                    
                    <!-- ======  Begin container   ======  -->
                    <!-- Description -->
                    <div v-if="pageType === 'description'"  class="col-md-9">
                        <div class="row">
                            <!-- headline -->
                            <div class="col-md-12">
                                <div class="headline-v1 margin-bottom-55">
                                <h2>使用說明</h2>
                                </div>
                            </div>
                        </div>
                        <!-- end headline -->
                        <!-- main content -->
                        <div class="row context-box">
                            <div class="col-md-12">
                                <p>中央氣象局開放資料平臺提供各式資料，為能優化開放資料的服務，本平臺採用會員服務機制，可使用中央氣象局氣象會員之帳號或透過facebook登入。民眾或機關可在登入本平臺後透過網頁連結下載資料，也可發展程式介接進行檔案下載或資料擷取。</p>
                                
                                <h4 class="idet">1.授權碼取得</h4>

                                <p class="idet2 isnot-login" v-if="!userLoginStatus"><a href="#" data-toggle="modal" data-target="#userLogin"><i class="fa fa-external-link" aria-hidden="true"></i>「您的授權碼需登入會員後始可取得」</a></p>
                                <p class="idet2 loged-in" v-if="userLoginStatus">
                                    <div class="idet2"  v-if="userLoginStatus">
                                        <a href="#" class="btn-u btn-u-blue rounded" v-on:click="getUserAuthkey">授權碼取得</a> 
                                        <a href="#" class="btn-u btn-u-blue rounded" v-on:click="logout">LOGOUT</a>
                                        <a class="idet2" style='color:red;font-size:20px;pointer-events:none'>{{userAuthkey}}</a>
                                    </div>
                                </p>
                                <p>※請留意若某一電子郵件已註冊過氣象會員，再以相同郵件帳號透過facebook登入本平臺，將會取得相同之授權碼，若點選上方更新授權碼也會同步影響兩種登入方式可取得之授權碼。</p>

                                
                            </div>
                        </div>
                        <!--end main content -->
                    </div>
                    <!-- Rules -->
                    <div v-if="pageType === 'rules'" class="col-md-9">
                        <div class="row">
                            <!-- headline -->
                            <div class="col-md-12">
                                <div class="headline-v1 margin-bottom-55">
                                <h2>使用規範</h2>
                                </div>
                            </div>
                        </div>
                        <!-- end headline -->
                        <!-- main content -->
                        <div class="row context-box">
                            <div class="col-md-12">
                                <h2>政府資料開放授權條款-第1版</h2>
                                <p><small>中華民國104年7月27日訂定</small></p>
                                <p>為便利民眾共享及應用政府資料、促進及活化政府資料應用、結合民間創意提升政府資料品質及價值、優化政府服務品質，訂定本條款。</p>
                            </div>
                        </div>
                        <!--end main content -->
                    </div>   

                    <!-- ======  End container   ======  -->
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
            <user-login-component v-on:userlogin="userLogin"></user-login-component>
        </div>
        <!--ＥＮＤ 會員登入 -->
    </div>

</template>
<script>


import userLoginComponent from '../user-login-component/User-login.vue'

import footerComponent from '../footer-component/Footer.vue'

const pagesType = [{ type: 'description', typeName: '使用說明'},
                 { type: 'rules', typeName: '使用規範'}];

import axios from 'axios'
import {axiosConfig} from '../config/axiosConfig.js'

export default {
    data: function(){
        return {
            pageType: '',
            userLoginStatus:false,
            userAuthkey: ''
        }
    },
    computed:{
        pageTypeName:function(){
            for(let i = 0; i < pagesType.length; i++){
                if(pagesType[i].type === this.pageType){
                    return pagesType[i].typeName;
                }
            } 
        }
    },
    components: {
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
        },
        getUserAuthkey: function() {
            var vm = this;
            axios.get('/userAuthkey',axiosConfig)
            .then(function(response){
                var msg = response.data;
                if(msg.success){
                    vm.userAuthkey = msg.data;
                }
            });
        },
        logout:function(){
            var vm = this;
            axios.get('/userLogout',axiosConfig)
            .then(function(response){
                vm.userLoginStatus = false;
            }); 
        }
    },
    created:function(){
        this.pageType = 'description';
        if(document.cookie){
            this.userLoginStatus = true;
        }
    }
}
</script>