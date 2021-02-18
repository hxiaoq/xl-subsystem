<template>
  <xl-line-chart
    :width="width"
    :height="height"
    :title="title"
    :series="series"
    :x-axis="xAxis"
    :y-axis="yAxis"
    :tooltip="tooltip"
    :legend="legend"
    :color="color"
  />
</template>

<script>
import { XlLineChart } from 'xl-echarts'
import echarts from 'echarts'
export default {
  components: {
    XlLineChart
  },
  data() {
    return {
      color: ['#f79c8c', '#0ecaf9'],
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['宿迁', '盐城', '连云港', '南京市', '苏州市', '淮安市', '徐州市', '常州市', '无锡市'
          ],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          name: '单位:（家）',
          type: 'value'
        }
      ],
      legend: {
        data: ['本期', '同期'],
        left: 'right'
      },
      width: '100%',
      height: '300px',
      tooltip: {},
      series: [
        {
          name: '本期',
          smooth: true,
          data: ['10', '13', '15', '18', '14', '10', '12', '11', '5'],
          lineStyle: {
            color: '#f79c8c',
            width: 1
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(247, 156, 140, .5)'
            }, {
              offset: 1,
              color: '#fff'
            }])
          }
        },
        {
          name: '同期',
          smooth: true,
          data: ['26', '27', '28', '30', '35', '31', '18', '12', '1'],
          lineStyle: {
            color: '#0ecaf9',
            width: 2
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(14, 202, 249, 0.5)'
            }, {
              offset: 1,
              color: '#fff'
            }])
          }
        }],
      title: {
        text: '数据统计',
        left: 'center'
      }
    }
  }
}
</script>
