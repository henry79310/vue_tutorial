<template>
    <div class="col-md-3">
        <ul class="list-group sidebar-nav-v1" id="sidebar-nav">
            <!-- 資料清單 -->
            <li class="list-group-item" v-bind:class="{active:pagetype === 'description'}">
                <a href="#" v-on:click="changeDevManualPage('description')">使用說明</a>
            </li>
            <li class="list-group-item" v-bind:class="{active:pagetype === 'rules'}">
                <a href="#" v-on:click="changeDevManualPage('rules')">使用規範</a>
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