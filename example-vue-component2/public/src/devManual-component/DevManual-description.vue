<template>
    <div class="col-md-9">
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

                <p class="idet2 isnot-login" v-if="!userloginstatus"><a href="#" data-toggle="modal" data-target="#userLogin"><i class="fa fa-external-link" aria-hidden="true"></i>「您的授權碼需登入會員後始可取得」</a></p>
                <p class="idet2 loged-in" v-if="userloginstatus">
                    <div class="idet2"  v-if="userloginstatus">
                        <a href="#getUserAuthkeyAnchor" class="btn-u btn-u-blue rounded" v-on:click="getUserAuthkey">授權碼取得</a> 
                        <a href="#getUserAuthkeyAnchor" class="btn-u btn-u-blue rounded" v-on:click="logout">LOGOUT</a>
                        <a class="idet2" style='color:red;font-size:20px;pointer-events:none'>{{userAuthkey}}</a>
                    </div>
                </p>
                <p>※請留意若某一電子郵件已註冊過氣象會員，再以相同郵件帳號透過facebook登入本平臺，將會取得相同之授權碼，若點選上方更新授權碼也會同步影響兩種登入方式可取得之授權碼。</p>

                
            </div>
        </div>
        <!--end main content -->
    </div>
</template>

<script>
    import { getUserAuthkey, updateUserAuthkey, validateUsertoken} from '../utils/user-login-utils'
    export default {
        data: function() {
            return {
                userAuthkey: ''
            }
        },
        computed:{
            login:function(){
                /* return this.$store.getters['login/login']; */
                return false;
            }
        },
        props:{
            userloginstatus:{
                type:Boolean,
                required:true
            }
        },
        methods: {
            getUserAuthkey: function() {
                /* getUserAuthkey().then((response)=>{
                    var msg = response.data;
                    if(msg != null && msg.success){
                        this.userAuthkey = msg.data;
                    }
                }).catch((err)=>{
                }); */
            },
            logout:function(){

            }
        }
    }
</script>