

function getAuthkey(){
    $.ajax({
        url: "/webapi/userAuthkey",
        method:"GET"
    }).done(function(msg) {
        if(msg.success){
            document.getElementById("getUAuthkey").text = msg.data;
        }
    });
}

/* var footerVue = new Vue({
    el: '#footer',
    components:{
        'footer-component':{
            template:`<footer id="footer-v3" class="footer-v3">
                        <div class="copyright ">
                            <div class="container ">
                                <div class="row ">
                                    <!-- link Info -->
                                    <div class="col-md-12 ">
                                        <p class="link ">
                                            <a target="_blank " href="https://www.cwb.gov.tw/V7/index.htm" >中央氣象局</a> |
                                            <a target="_blank " href="https://www.cwb.gov.tw/V7/private.htm">隱私權保護政策</a> |
                                            <a target="_blank " href="https://www.cwb.gov.tw/V7/private.htm">資訊安全政策</a>
                                        </p>
                                    </div>
                                    <!-- End link Info-->
                                    <!-- Address -->
                                    <address class="col-md-12 ">
                                        <p>地址：10048臺北市中正區公園路64號<br class="visible-xs ">
                                        總機：(02)2349-1000(代表號)<br class="visible-xs ">
                                        氣象查詢：(02)2349-1234    地震查詢：(02)2349-1168<br class="visible-xs ">
                                        請使用1024*768px螢幕解析度獲得最佳網頁瀏覽環境</p>
                                    </address>
                                    <!-- End Address -->
                                </div>
                            </div>
                        </div>
                    </footer>`
            }
    },
    created:function(){
        console.log(this);
    }
});  */



/* var loginVue = new Vue({
    el:'#login',
    components:{
        'login-component':{
            template:`<div class="modal fade " id="userLogin" tabindex="-1 " role="dialog " aria-labelledby="myModalLabel " aria-hidden="true ">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button ref="closeLoginPage" type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title" id="myModalLabel4">會員登入</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-8 col-md-offset-2">
                                            <form action="/webapi/userlogin" method="post" id="sky-form2" class="sky-form">
                                                <fieldset>
                                                    <section>
                                                        <div class="row">
                                                            <label class="col-md-12">郵件帳號</label>
                                                            <div class="col-md-12">
                                                                <label class="input">
                                                                    <i class="icon-prepend icon-email"></i>
                                                                    <input type="email" name="userid">
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
                                                                        <input type="password" name="password">
                                                                    </label>
                                                                </div>
                                                        </div>
                                                        </section>
                                
                                                        <section>
                                                            <label style="color:red"></label>
                                                            <div class="row mrgbtn20">
                                                                <div class="col-md-12 xs-mrgbtn20"><button type="submit" class="btn-u btn-u-red btn-block rounded-2x">登入</button></div>
                                                            </div>
                                                        </section>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
        }
    }
}); */