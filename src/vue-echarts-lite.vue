<template>
    <div></div>
</template>

<script>
import echarts from 'echarts';

export default {
    name: 'lz-chart',
    props: {
        config: Object,
        theme: [String, Object]
    },
    mounted: function() {
        /**
         * @param {echartsOptions} options
         * @private
         */
        function setOptions(options) {
            options = options || {};
            options.forceClear && chart.clear();
            if (options.series && options.series.length) {
                chart.hideLoading();
                chart.setOption(options, options.notMerge);
                chart.resize();
            } else {
                chart.showLoading('default', options.errorMsg || { text: '没有数据' });
            }
        }

        var chart = echarts.init(this.$el, this.theme);
        setOptions(this.config);

        // Check for attribute "unwatch" whether to register watcher
        if (!this.$el.hasAttribute('unwatch')) {
            this.$watch('config', function(newVal) {
                setOptions(newVal);
            });
            this.$watch('theme', function(newVal) {
                chart.dispose();
                chart = echarts.init(this.$el, newVal);
                chart.setOption(this.config);
            });
        }

        // Check for attribute "instance" whether to bind function
        // to get echarts instance
        if (Object.hasOwnProperty.call(this._events, 'instance')) {
            this.$emit('instance', function() {
                return chart;
            });
        }
    }
};
</script>