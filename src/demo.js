import vue from 'vue';
import 'vue-echarts-lite';
import demo from './demo.vue';

new vue({
    el: '#demo',
    template: '<demo></demo>',
    comments: {
        demo: demo
    }
});