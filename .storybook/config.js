import { configure } from '@storybook/vue';
import echarts from 'echarts';
import 'echarts/theme/vintage';
import 'echarts/theme/dark';
import 'echarts/theme/macarons';
import Vue from 'vue';
import chart from 'vue-echarts-lite';

Vue.use(chart);

function loadStories() {
    // You can require as many stories as you need.
    require('../stories');
}

configure(loadStories, module);