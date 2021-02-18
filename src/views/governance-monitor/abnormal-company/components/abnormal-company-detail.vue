<template>
  <div>
    <xl-row>
      <xl-col :span="20">
        <xl-row>
          <xl-date-next-pre v-model="normal" @change="getChanged" />
          <linechart />
        </xl-row>
      </xl-col>
      <xl-col :span="4">
        <xl-timeline>
          <xl-timeline-item
            v-for="(item, index) in timeArr"
            :key="index"
            :timestamp="item.timestamp"
            :timestamp-position="item.timestampPosition"
            :content="item.content"
            :color="item.color"
            :size="item.size"
            :line-color="item.lineColor"
          />
        </xl-timeline>
      </xl-col>
    </xl-row>
  </div>
</template>

<script>
import { XlTimeline } from 'xl-views'
import { XlTimelineItem } from 'xl-views'
import linechart from './linechart'
import { XlDateNextPre } from 'xl-views'

export default {
  components: {
    XlDateNextPre,
    XlTimeline,
    XlTimelineItem,
    linechart
  },
  data() {
    return {
      normal: new Date(),
      timeArr: [
        {
          color: '#3489FE',
          lineColor: '#3489FE',
          size: '14',
          timestampPosition: 'right',
          timestamp: '2020-07-28 12:58',
          content: '中国联合网络通信集团有限公司江阴分公司 核实通过'
        }, {
          color: '#58BA2D',
          lineColor: '#58BA2D',
          size: '14',
          timestampPosition: 'right',
          timestamp: '2020-06-28 10:52',
          content: '江阴市周庄染整有限公司 申报'
        },
        {
          color: '#DF912E',
          size: '14',
          lineColor: '#DF912E',
          timestampPosition: 'right',
          timestamp: '2020-05-28 09:15',
          content: '江阴市周庄染整有限公司 未申报'
        },
        {
          color: '#F05359',
          size: '14',
          timestampPosition: 'right',
          timestamp: '2020-04-28 09:15',
          content: '江阴市周庄染整有限公司 草稿'
        }
      ]
    }
  },
  methods: {
    getChanged(value) {
      console.log(value)
    }
  }
}
</script>

<style>

</style>
