import { storiesOf } from '@storybook/vue'
import { withNotes } from '@storybook/addon-notes'
import chart from './lz-chart.vue'
import chartUw from './lz-chart-uw.vue'
import marked from 'marked'
import hljs from 'highlight.js'

const chartMd = `
Template:
~~~html
<lz-chart :config="config" class="chart" :theme="theme"></lz-chart>
~~~
`

const chartUwMd = `
Template:
~~~html
<lz-chart ref="inst" unwatch :config="config" class="chart" :theme="theme"></lz-chart>
~~~
Handle config change via component instance
~~~js
this.$refs.inst.chart.setOption(this.config)
~~~
Handle theme change via component instance
~~~js
this.$refs.inst.setTheme(this.theme)
~~~
`

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
})

storiesOf('vue-echarts-lite', module)
    .add('Chart', withNotes(marked(chartMd))(() => chart))
    .add('Chart using unwatch', withNotes(marked(chartUwMd))(() => chartUw));