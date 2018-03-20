"use strict";
import axios from 'axios'
import Promise from 'bluebird';

import {axiosConfig} from '../config/axiosConfig.js'
import {USER_TOKEN_KEY, ajaxURL} from '../config/config.js'


export function userLogin(userid, password,recaptchaToken){
    return axios.post('/user/login/',
                    {  
                        userid:userid, 
                        password:password,
                        recaptchaToken:recaptchaToken
                    },
                    axiosConfig);
}



export function validateUsertoken(vm){
    var usertoken = getUsertokenInClient();
    if(usertoken != null &&  usertoken.length !== 0){
        axiosConfig.headers = {'Authorization':usertoken};
        axios.post('/user/token/',{},axiosConfig).then(response=>{
            var msg = response.data
            if(msg && msg.success){
                vm.$store.dispatch({
                    type:'login/changeUsertokenState',
                    usertoken: usertoken
                });
            }else{
                removeUsertoken(vm);
            }
        }).catch(function(err){
          
        });
    }
    
}

export function setUsertoken(vm, token){
    if (window.localStorage) {
        window.localStorage.setItem(USER_TOKEN_KEY, token);
    } else { 
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 86400000 * 365; // one year
        now.setTime(expireTime);
        document.cookie = [token,"path=/","Expires="+now.toGMTString()].join(";");
    }
    vm.$store.dispatch({
        type:'login/changeUsertokenState',
        usertoken: token
    });
}


export function removeUsertoken(vm){
    if (window.localStorage) {
        window.localStorage.setItem(USER_TOKEN_KEY, '');
    }else{
        document.cookie = '';
    }
    setTimeout(function() {
        vm.$store.dispatch({
            type:'login/changeUsertokenState',
            usertoken: ''
        });
    }, 0.5);
}


function getUsertokenInClient(){
    var usertoken = null;
    if (window.localStorage) {
        usertoken = window.localStorage.getItem(USER_TOKEN_KEY);
    } else {
        usertoken = document.cookie;
    }
    return usertoken;
}

export function getUserAuthkey(){
    var usertoken = getUsertokenInClient();
    axiosConfig.headers = {'Authorization':usertoken};
    return axios.get('/user/authkey/',axiosConfig);
    
}; 