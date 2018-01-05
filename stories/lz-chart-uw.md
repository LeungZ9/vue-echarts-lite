Template:
```html
<lz-chart ref="inst" unwatch :config="config" class="chart" :theme="theme"></lz-chart>
```
Handle config change via component instance
```js
this.$refs.inst.chart.setOption(this.config)
```
Handle theme change via component instance
```js
this.$refs.inst.setTheme(this.theme)
```