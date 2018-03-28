import Vue from 'vue';
import 'bootstrap';

// for webpack to pack scss
import '../assets/sass/main.scss';

/**  Footer Component */
import footerComponent from './footer-component/Footer.vue'

var footerVue = new Vue({
    el: '#footer',
    components:{
        'footer-component':footerComponent
    }
});