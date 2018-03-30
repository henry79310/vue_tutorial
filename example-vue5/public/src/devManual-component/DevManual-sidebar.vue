<template>
    <div class="col-md-3">
        <ul class="list-group sidebar-nav-v1" id="sidebar-nav">
            <!-- 資料清單 -->
            <li class="list-group-item" v-bind:class="{active:pageTypeChild === 'description'}">
                <!-- <a href="/devManual/description">使用說明</a> -->
                <router-link to="/devManual/description">使用說明</router-link>
            </li>
            <li class="list-group-item" v-bind:class="{active:pageTypeChild === 'rules'}">
               <!--  <a href="/devManual/rules">使用規範</a> -->
                <router-link to="/devManual/rules">使用規範</router-link>
            </li>
            <!-- End 資料清單 -->
        </ul>
     </div>
</template>
<script>
    export default {
        props: ['pageTypeChild'],
        methods:{
            changeDevManualPage:function(pageType){
                this.$emit('changeDevManualPageChild', pageType);
            }
        },
        computed:{
            test:function(){
                console.log(this);
                console.log(this.$route.name);
                return this.$route.name;
            }
        },
        watch:{
            $route:function(){
                /* console.log(this.$route); */
                /* this.pageType = this.$route.name; */
            }  
    },
        created:function(){
            /* console.log(this);
            console.log(this.$route.name); */
        }
    }
</script>