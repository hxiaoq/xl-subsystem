<template>
  <div>
    <xl-bar-chart
      :width="width"
      :height="height"
      :title="title"
      :x-axis="xAxis"
      :y-axis="yAxis"
      :series="series"
      :tooltip="tooltip"
    />
  </div>
</template>

<script>
import { XlBarChart } from 'xl-echarts'
import Echarts from 'echarts'

export default {
  components: {
    XlBarChart
  },
  data() {
    return {
      width: '100%',
      height: '300px',
      title: {
        text: 'xxxx机构企业治理设施异常分析',
        left: 'center'
      },
      xAxis: {
        data: ['宿迁', '盐城', '连云港', '南京市', '苏州市', '淮安市', '徐州市', '常州市', '无锡市']
      },
      yAxis: [
        {
          name: '单位:（家）',
          type: 'value'
        }
      ],
      tooltip: {},
      series: {
        name: 'bar',
        barWidth: '40%',
        itemStyle: {
          barBorderRadius: 3,
          opacity: '0.95',
          color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#ff6766'
          }, {
            offset: 1,
            color: '#ff9866'
          }])
        },
        data: ['26', '27', '28', '30', '35', '31', '18', '12', '1']
      }
    }
  }
}
</script>

<style>

</style>
