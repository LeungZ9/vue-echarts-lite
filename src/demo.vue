<template>
    <div class="main-content">
        <div class="echarts-content">
            <div>
                <label for="echarts-theme">Theme </label>
                <select id="echarts-theme" @change="themeChange" v-model="theme">
                    <option value="">Default</option>
                    <option value="vintage">Vintage</option>
                    <option value="dark">Dark</option>
                    <option value="macarons">Macarons</option>
                </select>&nbsp;&emsp;
                <label for="echarts-unwatch">Unwatch</label>
                <input type="checkbox" v-model="unwatch" id="echarts-unwatch" />
                <div class="well" v-show="unwatch" v-text="unwatchDesc"></div>
            </div>
            <textarea id="echarts-options" @input="configTxtChange" v-model="configTxt" placeholder="echarts options..."></textarea>
        </div>
        <div class="chart-content">
            <lz-chart v-if="unwatch" key="chart_uw" unwatch :config="config" class="chart" :theme="theme" @instance="chartInst = $event()"></lz-chart>
            <lz-chart v-else :config="config" class="chart" :theme="theme"></lz-chart>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts';
import 'echarts/theme/vintage';
import 'echarts/theme/dark';
import 'echarts/theme/macarons';

export default {
    name: 'demo',
    data: function() {
        var config = {
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
        return {
            theme: '',
            unwatch: false,
            unwatchDesc: '\'unwatch\' just takes effort once on conponent mounted. While on unwatch, it will skip watcher for \'theme\' and \'config\'. Instead, you must update chart via chart instance api by yourself',
            config: config,
            configTxt: JSON.stringify(config, null, 2),
            chartInst: null,
            timeout: null,
        };
    },
    methods: {
        configTxtChange: function() {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(function() {
                this.config = JSON.parse(this.configTxt);
                // If not register scope watcher, update chart via API on chart instance
                if (this.unwatch) {
                    this.chartInst.setOption(this.config);
                }
            }.bind(this), 300);
        },
        themeChange: function() {
            // If not register scope watcher, update chart via API on chart instance
            if (this.unwatch) {
                this.chartInst.dispose();
                this.chartInst = echarts.init(this.chartInst.getDom(), this.theme);
                this.chartInst.setOption(this.config);
            }
        }
    }
};
</script>
<style>
.main-content {
    height: 100%;
    display: flex;
}

.main-content .echarts-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.main-content .echarts-content .well {
    background-color: #f5f5f5;
    color: #8a6d3b;
    padding: 5px 5px;
    font-size: 12px;
    margin: 8px 0 0;
}

.main-content .echarts-content textarea {
    box-sizing: border-box;
    width: 100%;
    margin-top: 8px;
    flex: 1;
    resize: none;
}

.main-content .chart-content {
    flex: 1;
}

.main-content .chart-content .chart {
    height: 100%;
}
</style>

