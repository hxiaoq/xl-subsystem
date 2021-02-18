<template>
  <xl-bar-chart
    :width="width"
    :height="height"
    :title="title"
    :x-axis="xAxis"
    :y-axis="yAxis"
    :tooltip="tooltip"
    :legend="legend"
    :series="series"
  />
</template>

<script>
import { XlBarChart } from 'xl-echarts'
import echarts from 'echarts'

export default {
  components: {
    XlBarChart
  },
  data() {
    return {
      width: '100%',
      height: '300px',
      title: { text: '数据统计', left: 'center' },
      tooltip: {
      },
      xAxis: [
        {
          show: false,
          name: '单位:（家）',
          type: 'value'
        }
      ],
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        data: ['宿迁', '盐城', '连云港', '南京市', '苏州市', '淮安市', '徐州市', '常州市', '无锡市'
        ]
      },
      legend: {
        data: ['bar', 'bar1'],
        left: 'right'
      },
      series: [{
        name: 'bar',
        data: ['26', '27', '28', '30', '35', '31', '18', '12', '1'],
        stack: 'stack',
        itemStyle: {
          barBorderRadius: 1,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: 'rgba(95, 137, 247, 1)'
          }, {
            offset: 1,
            color: 'rgba(62, 180, 243, 1)'
          }])
        }

      },
      {
        name: 'bar1',
        data: ['26', '27', '28', '30', '35', '31', '18', '12', '1'],
        stack: 'stack',
        itemStyle: {
          barBorderRadius: 1,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: 'rgba(243, 114, 52, 1)'
          }, {
            offset: 1,
            color: 'rgba(255, 102, 100, 1)'
          }])
        }
      }
      ]
    }
  }
}
</script>
