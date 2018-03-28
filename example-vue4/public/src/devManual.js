import Vue from 'vue'


import 'bootstrap'

// for webpack to pack scss
import '../assets/sass/main.scss'

/** Content Component */
import devManualComponent from './devManual-component/DevManual.vue'


var content = new Vue({
    el: '#devManual',
    components:{
        'dev-manual-component':devManualComponent
    }
});
