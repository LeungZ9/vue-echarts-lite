import Vue from 'vue';
import VueEchartsLite from '../../src/vue-echarts-lite.vue';

describe('vue-echarts-lite.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(VueEchartsLite);
        const vm = new Constructor({
            propsData: {
                config: {},
            }
        });
        expect(vm.$el);
    });
});