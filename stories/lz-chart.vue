<template>
    <div class="main-content">
        <div class="echarts-content">
            <div>
                <label for="echarts-theme">Theme </label>
                <select id="echarts-theme" v-model="theme">
                    <option value="">Default</option>
                    <option value="vintage">Vintage</option>
                    <option value="dark">Dark</option>
                    <option value="macarons">Macarons</option>
                </select>
            </div>
            <textarea id="echarts-options" @input="configTxtChange" v-model="configTxt" placeholder="echarts options..."></textarea>
        </div>
        <div class="chart-content">
            <lz-chart :config="config" class="chart" :theme="theme"></lz-chart>
        </div>
    </div>
</template>
<script>
export default {
  name: 'demo',
  data() {
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
    }
    return {
      theme: '',
      config: config,
      configTxt: JSON.stringify(config, null, 2),
      timeout: ''
    }
  },
  methods: {
    configTxtChange() {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        try {
          this.config = JSON.parse(this.configTxt)
        } catch (e) {
          alert(e)
        }
      }, 300)
    }
  }
}
</script>
<style>
#root {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
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

