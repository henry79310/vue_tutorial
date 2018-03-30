<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button ref="closeLoginPage" type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel4">會員登入</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <form action="#" id="sky-form2" class="sky-form">
                            <fieldset>
                                <section>
                                    <div class="row">
                                        <label class="col-md-12">郵件帳號</label>
                                        <div class="col-md-12">
                                            <label class="input">
                                                <i class="icon-prepend icon-email"></i>
                                                <input type="email" v-model="userid">
                                            </label>
                                                
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div class="row">
                                        <label class="col-md-12">密碼</label>
                                            <div class="col-md-12">
                                                <label class="input">
                                                    <i class="icon-prepend icon-lock"></i>
                                                    <input type="password" v-model="password">
                                                </label>
                                            </div>
                                    </div>
                                    </section>
            
                                    <section>
                                        <label style="color:red"></label>
                                        <div class="row mrgbtn20">
                                            <div class="col-md-12 xs-mrgbtn20"><button type="button" class="btn-u btn-u-red btn-block rounded-2x" v-on:click="userLogin">登入</button></div>
                                        </div>
                                    </section>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


import axios from 'axios'
import {axiosConfig} from '../config/axiosConfig.js'

export default {
    data: function() {
        return {
            userid: null,
            password: null
        }

    },
    methods: {
        userLogin: function() {
            if (this.userid != null && this.password != null) {
                var vm = this;
                axios.post('/userLogin/',{  
                    userid:this.userid, 
                    password:this.password
                },axiosConfig)
                .then(function(response){
                    var msg = response.data;
                    if(msg.success){
                        vm.$store.dispatch({
                            type:'changeUserLoginState',
                            usertoken: msg.data
                        });
                        vm.$refs.closeLoginPage.click();
                    }
                    vm.$refs.closeLoginPage.click();
                }).catch(function(err){
                });
            }
        }
    }
}
</script>