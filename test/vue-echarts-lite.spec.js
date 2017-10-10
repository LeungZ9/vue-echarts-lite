import Vue from 'vue';
import VueEchartsLite from '../src/vue-echarts-lite.vue';

Vue.config.productionTip = false;

const miniConf = {
    xAxis: {
        name: 'x',
        data: []
    },
    yAxis: {
        name: 'y',
    },
    series: [
        {
            type: 'line',
            data: []
        }
    ]
};

describe('vue-echarts-lite.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(VueEchartsLite);
        const vm = new Constructor({
            propsData: { config: miniConf }
        }).$mount();
        expect(vm.$el.getAttribute('_echarts_instance_')).to.match(/^ec_\d{13}$/);
        expect(vm.$el.querySelector('canvas')).to.not.be.null;
    });

    it('should return correct chart instance', () => {
        let event;
        const Constructor = Vue.extend(VueEchartsLite);
        const vm = new Constructor({
            propsData: { config: miniConf }
        }).$on('instance', $e => { event = $e; }).$mount();
        expect(event().constructor.name).to.equal('ECharts');
        expect(event().id).to.equal(vm.$el.getAttribute('_echarts_instance_'));
    });
});