<template>
    
    <div class="row">
        <!-- ====== header & content    ====== -->
        <router-view></router-view>
        <!-- ======end content ====== -->
        
        <!-- footer -->
        <footer id="footer-v3" class="footer-v3">
            <footer-component></footer-component>
        </footer>
        <!--end footer -->
        <!-- 會員登入 -->
        <div class="modal fade " id="userLogin" tabindex="-1 " role="dialog " aria-labelledby="myModalLabel " aria-hidden="true ">
            <user-login-component></user-login-component>
        </div>
        <!--ＥＮＤ 會員登入 -->
    </div>
</template>
<script>
"use strict";

import userLoginComponent from '../user-login-component/User-login.vue';
import footerComponent from '../footer-component/Footer.vue';

import {loginStore} from '../vuex-store/login-vuex.js';
export default {
    store:loginStore,
    components: {
        'user-login-component':userLoginComponent,
        'footer-component':footerComponent

    },
    computed:{
        headerClass:function(){
            return this.$store.getters['content/headerClass'];
        }
    }
}


</script>