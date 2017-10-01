import vue from 'vue';
import 'vue-echarts-lite';
import demo from './demo.vue';

new vue({
    el: '#demo',
    render: function(ce){
        return ce('demo');
    },
    components: {
        demo: demo
    }
});