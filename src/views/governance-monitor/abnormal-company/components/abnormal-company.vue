<template>
  <div>
    <xl-form
      :inline="true"
      :model="form"
      class="demo-form-inline"
    >
      <xl-row>
        <xl-form-item label="日期">
          <xl-date-picker
            v-model="form.date"
            type="daterange"
            range-separator="至"
            start-placeholder="请选择开始时间"
            end-placeholder="请选择结束时间"
          />
        </xl-form-item>
        <xl-form-item>
          <xl-button type="primary" @click="query">查询</xl-button>
        </xl-form-item>
      </xl-row>
    </xl-form>
    <xl-table-pageable
      :data="tableData"
      :loading="loading"
    >
      <xl-table-column type="index" width="50" />
      <xl-table-column prop="company" label="产污设施" />
      <xl-table-column prop="equipmentName" label="治污设施" />
      <xl-table-column prop="currentState" label="治污设施监测点" />
      <xl-table-column prop="runTime" label="发生时间" />
      <xl-table-column prop="stopTime" label="发生时产污设施负荷（kW）" />
      <xl-table-column prop="stopTime" label="产污设施启停阈值（kW）" />
      <xl-table-column prop="stopTime" label="异常类型" />
      <xl-table-column prop="stopTime" label="恢复时间" />
      <xl-table-column prop="stopTime" label="时长" />
    </xl-table-pageable>
  </div>
</template>

<script>
import { XlTablePageable } from 'xl-views'

export default {
  components: {
    XlTablePageable
  },
  data() {
    return {
      form: {
        date: []
      },
      loading: false,
      tableData: [
        {
          company: '南京',
          equipmentName: '42',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '南京',
          equipmentName: '43',
          currentState: '停用',
          runTime: '-',
          stopTime: '8小时'
        },
        {
          company: '南京',
          equipmentName: '42',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '南京',
          equipmentName: '42',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '南京',
          equipmentName: '43',
          currentState: '停用',
          runTime: '-',
          stopTime: '8小时'
        },
        {
          company: '南京',
          equipmentName: '42',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '南京',
          equipmentName: '42',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '南京',
          equipmentName: '42',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '南京',
          equipmentName: '42',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '南京',
          equipmentName: '42',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        }
      ]
    }
  },
  methods: {
    query() {
      console.log('查看详情')
    }
  }
}
</script>

<style>

</style>
