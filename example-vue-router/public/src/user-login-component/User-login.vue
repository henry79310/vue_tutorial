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
                                        <label v-if="errLogin" style="color:red">{{errMsg}}</label>
                                        <div class="row mrgbtn20">
                                            <div class="col-md-12 xs-mrgbtn20"><button type="button" class="btn-u btn-u-red btn-block rounded-2x" v-on:click="userLogin" v-bind:disabled="validating">登入</button></div>
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

import {loginStore} from '../vuex-store/login-vuex.js'
import {userLogin, setUsertoken} from '../utils/user-login-utils.js'
import {SHOW_ACCOUNT_OR_PASSWORD_EMPTY_MSG,SHOW_ACCOUNT_OR_PASSWORD_ERROR_MSG,} from '../config/config.js'

export default {
    store:loginStore,
    props: ['userloginstatus'],
    data: function() {
        return {
            userid: null,
            password: null,
            errLogin: false,
            errMsg:'',
            validating:false
        }

    },
    methods: {
        userLogin: function() {
            if (this.userid != null && this.password != null) {
                this.validating = true;
                userLogin(this.userid,this.password).then((response)=>{
                    this.validating = false;
                    var msg = response.data;
                    msg = validateJsonObj(msg);
                    if(msg != null && msg.success){ 
                        var token = msg.data
                        setUsertoken(this, token);
                        this.$refs.closeLoginPage.click();
                    }else{
                        this.errLogin = true;
                        this.errMsg = SHOW_ACCOUNT_OR_PASSWORD_ERROR_MSG;
                            
                    }
                }).catch(err=>{
                });

              
            }else{
                this.validating = false;
                this.errLogin = true;
                this.errMsg = SHOW_ACCOUNT_OR_PASSWORD_EMPTY_MSG;
            }
        }
    }
}



</script>