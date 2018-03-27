<template>
    <div class="col-md-3">
        <ul class="list-group sidebar-nav-v1" id="sidebar-nav">
            <!-- 資料清單 -->
            <li class="list-group-item" v-bind:class="{active:pagetype == 'description'}">
                <router-link to="/devManual/description">使用說明</router-link>
            </li>
            <li class="list-group-item" v-bind:class="{active:pagetype == 'rules'}">
                <router-link to="/devManual/rules">使用規範</router-link>
            </li>
            <!-- End 資料清單 -->
        </ul>
     </div>
</template>
<script>
    export default {
        props: ['pagetype']
    }

</script>