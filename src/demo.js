import Vue from 'vue';
import demo from './demo.vue';

new Vue({
    el: '#demo',
    render: function(ce){
        return ce('demo');
    },
    components: {
        demo: demo
    }
});