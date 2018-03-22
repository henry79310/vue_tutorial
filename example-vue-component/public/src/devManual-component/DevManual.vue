<template>
    <div class="wrapper">

        <main id="content" v-cloak>
            <!-- breadcrumbs -->
            <div class="breadcrumbs" id="topicAnchor">
                <div class="container">
                    <ul class="breadcrumb">
                        <li><a href="/index"><i class="icon-home"></i></a></li>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <li><router-link v-bind:to="{path:'/devManual/' + pageType}">開發指南</router-link></li>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <li class="active">{{pageTypeName}}</li>
                    </ul>
                </div>
                <!--/container-->
            </div>
            <!-- end breadcrumbs -->
            <div class="container">
                <div class="row">
                    <!-- Begin Sidebar Menu -->
                    <dev-manual-sidebar-component v-bind:pagetype="pageType"></dev-manual-sidebar-component>
                    <!-- End Sidebar Menu -->
                    <router-view></router-view>
                    <!-- <dev-manual-description-component v-show="pageType === 'description'"></dev-manual-description-component>
                    <dev-manual-rules-component v-show="pageType === 'rules'"></dev-manual-rules-component> -->
                </div>
            </div>
        </main>
    </div>

</template>
<script>
"use strict";
import devManualSidebarComponent from './DevManual-sidebar.vue'
import {devManualStore} from '../vuex-store/devManual-vuex.js'

const pagesType = [{ type: 'description', typeName: '使用說明' },
        { type: 'rules', typeName: '使用規範' }];
export default {
    store:devManualStore,
    data: function(){
        return {
            pageType: ''
        }
    },
    computed:{
        pageTypeName:function(){
            var pageType = this.$store.getters['devManual/pageType'];
            for(let i = 0; i < pagesType.length; i++){
                if(pagesType[i].type === pageType){
                    this.pageType = pagesType[i].type;
                    return pagesType[i].typeName;
                }
            }
        }
    },
    components: {
        'dev-manual-sidebar-component': devManualSidebarComponent,
    }
}
</script>