import comp from './vue-echarts-lite.vue';

class Component {
    constructor() {
        if (typeof window !== 'undefined' && window.Vue){
            this.install(window.Vue);
        }
    }
    install(Vue) {
        Vue.component('lz-chart', comp);
    }
}

export default new Component();