<template>
    <div class="col-md-3">
        <ul class="list-group sidebar-nav-v1" id="sidebar-nav">
            <!-- 資料清單 -->
            <li class="list-group-item" v-bind:class="{active:pageTypeChild === 'description'}">
                <a href="#" v-on:click="changeDevManualPage('description')">使用說明</a>
            </li>
            <li class="list-group-item" v-bind:class="{active:pageTypeChild === 'rules'}">
                <a href="#" v-on:click="changeDevManualPage('rules')">使用規範</a>
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
        }
    }
</script>