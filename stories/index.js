import { storiesOf } from '@storybook/vue';
import { withNotes } from '@storybook/addon-notes';
import chartMd from './lz-chart.md';
import chart from './lz-chart.vue';
import chartUw from './lz-chart-uw.vue';
import chartUwMd from './lz-chart-uw.md';

storiesOf('vue-echarts-lite', module)
    .add('Chart', withNotes(chartMd)(() => chart))
    .add('Chart with unwatch', withNotes(chartUwMd)(() => chartUw));