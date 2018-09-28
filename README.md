# Vue Echarts lite

Vue.js 2.0+ component for baidu echarts v3

**[Demo](https://leungz9.github.io/vue-echarts-lite/)** (updated with every release)

## Quick start

Install the library

```
npm install --save vue-echarts-lite
```

Then simply include the correct file in a closing `<script>` tag after vue.js and echarts

```html
<script src="path/to/vue.min.js"></script>
<script src="path/to/echarts.min.js"></script>
<script src="node_modules/vue-echarts-lite/dist/vue-echarts-lite.min.js"></script>
```

Declare a demo vue instance

```js
new Vue({
    el: '#demo',
    data: {
        config: {
            title: {
                text: '对数轴示例',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}'
            },
            legend: {
                left: 'left',
                data: ['3的指数']
            },
            xAxis: {
                type: 'category',
                name: 'x',
                splitLine: { show: false },
                data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'log',
                name: 'y'
            },
            series: [
                {
                    name: '3的指数',
                    type: 'line',
                    data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
                }
            ]
        };
    }
})
```

Add this markup into page using vue-echarts-lite as a global component
```html
<div id="demo">
    <lz-chart config="config" style="width:480px;height:480px"></lz-chart>
</div>
```

That's all! Now you can get up and running the demo.

## Use vue echarts lite with webpack

You can obtain vue echarts lite directly in project via webpack to register a global component

```js
var chart = require('vue-echarts-lite')

// To install vue echarts lite
Vue.use(chart)
```

To use local registration
```js
var chart = require('vue-echarts-lite/src/vue-echarts-lite.vue')

//To do component registration
```

Require charts and components on demand
```js
//Config in webpack config --- Start
resolve: {
    alias: 'echarts$': 'echarts/lib/echarts'
}
//Config in webpack config --- End

//Require on demand in webpack entry --- Start
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
//Require on demand in webpack entry --- End
```

## Usage

```html
<lz-chart :config :theme :unwatch></lz-chart>
```

You can find all possible properties for the component in the table below:

Attribute  | Usage
---        | ---
config     | `Object`, set the configuration of chart by using [echarts options](https://ecomfe.github.io/echarts-doc/public/en/option.html)<br>Here is some additional configuration:<br>**forceClear** `boolean`, whether to remove chart before update<br>**notMerge** `boolean`, whether not to merge with previous<br>**errorMsg** `Object`, configuration item while error, [more detail](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.showLoading)
theme      | `Object` or `string`,  set the theme of chart
unwatch    | `Boolean`, cancel watcher for `config` and `theme`, just takes effort during component mounted


While unwatch set, you must update chart via component instance by yourself as below:

```html
<lz-chart unwatch :config="config" :theme="theme" ref="instance"></lz-chart>
```

```js
//To get the component instance via ref attribute
this.$refs.instance.chart.setOption(this.config)
```

Also here are all properties for the component instance you can use

Attribute  | Usage
---        | ---
setOptions | `Method`, handle the configuration of chart 
setTheme   | `Method`, handle the theme of chart
chart      | `Object`, echarts instance after echarts initialize

## Running the demo

Setup the repo:

```
git clone https://github.com/LeungZ9/vue-echarts-lite.git && cd vue-echarts-lite
npm i
```

Run the development server:

```
cd /path/to/vue-echarts-lite
npm run dev
```