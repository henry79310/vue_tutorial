<template>
    <div class="col-md-3">
        <ul class="list-group sidebar-nav-v1" id="sidebar-nav">
            <!-- 資料清單 -->
            <li class="list-group-item" v-bind:class="{active:pagetype === 'description'}">
                <a href="/devManual/description">使用說明</a>
                <!-- <router-link to="/devManual/description"></router-link> -->
            </li>
            <li class="list-group-item" v-bind:class="{active:pagetype === 'rules'}">
                <a href="/devManual/rules">使用規範</a>
                <!-- <router-link to="/devManual/rules"></router-link> -->
            </li>
            <!-- End 資料清單 -->
        </ul>
     </div>
</template>
<script>
    export default {
        props: ['pagetype'],
        methods:{
            changeDevManualPage:function(pagetype){
                this.$emit('changedevmanualpage', pagetype);
            }
        }
    }
</script>