import Vue from 'vue';
import comp from './vue-echarts-lite.vue';

class Component{
    install(){
        Vue.component('lz-chart', comp);
    }
}

export default Vue.use(new Component());