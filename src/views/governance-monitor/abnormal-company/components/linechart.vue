<template>
  <xl-line-chart
    :width="width"
    :height="height"
    :x-axis="xAxis"
    :y-axis="yAxis"
    :tooltip="tooltip"
    :background-color="backgroundColor"
    :series="series"
  />
</template>

<script>
import { XlLineChart } from 'xl-echarts'
export default {
  components: {
    XlLineChart
  },
  data() {
    return {
      width: '100%',
      height: '300px',
      backgroundColor: '#eee',
      xAxis: [
        {
          type: 'category',
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
          scale: true,
          type: 'value'
        }
      ],
      series: {
        name: '',
        data: ['426', '427', '428', '430', '435', '431', '518', '512', '451']
      },
      tooltip: {},
      title: '数据统计'
    }
  }
}
</script>
