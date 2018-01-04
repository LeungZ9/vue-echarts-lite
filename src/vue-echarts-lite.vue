<template>
    <div></div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'lz-chart',
  props: {
    config: Object,
    theme: [String, Object],
    unwatch: Boolean
  },
  data() {
    return {
      chart: ''
    }
  },
  mounted() {
    this.chart = echarts.init(this.$el, this.theme)
    this.setOptions(this.config)

    // Check for attribute "unwatch" whether to register watcher
    if (!this.unwatch) {
      this.$watch('config', function(newVal) {
        this.setOptions(newVal)
      })
      this.$watch('theme', function(newVal) {
        this.setTheme(newVal)
      })
    }
  },
  methods: {
    /**
     * @param {echartsOptions} options
     * @private
     */
    setOptions(options) {
      options = options || {}
      options.forceClear && this.chart.clear()
      if (options.series && options.series.length) {
        this.chart.hideLoading()
        this.chart.setOption(options, options.notMerge)
        this.chart.resize()
      } else {
        this.chart.showLoading(
          'default',
          options.errorMsg || { text: 'No data' }
        )
      }
    },
    /**
     * @param {echartsTheme} theme
     * @private
     */
    setTheme(theme) {
      this.chart.dispose()
      this.chart = echarts.init(this.$el, theme)
      this.chart.setOption(this.config)
    }
  }
}
</script>