<template>
  <div>
    <xl-form
      :inline="true"
      :model="form"
      class="demo-form-inline"
    >
      <xl-form-item>
        <xl-date-picker
          v-model="form.date"
          type="datetimerange"
          range-separator="至"
          start-placeholder="请选择开始时间"
          end-placeholder="请选择结束时间"
        />
      </xl-form-item>
      <xl-form-item>
        <xl-button type="primary" @click="download">下载</xl-button>
        <xl-button type="primary" @click="show = !show">高级搜索</xl-button>
      </xl-form-item>

      <xl-collapse-transition name="el-zoom-in-top">
        <xl-row v-show="show">
          <xl-form-item label="企业名称">
            <xl-input
              v-model="form.user"
              placeholder="请输入污染源企业名称"
            />
          </xl-form-item>
          <xl-form-item label="行业">
            <xl-select v-model="form.user" placeholder="请选择行业">
              <xl-option label="全部" value="0" />
              <xl-option label="未审核" value="1" />
              <xl-option label="审核通过" value="2" />
              <xl-option label="审核驳回" value="3" />
              <xl-option label="已核实" value="4" />
            </xl-select>
          </xl-form-item>
          <xl-form-item label="运维公司">
            <xl-select v-model="form.user" placeholder="请选择运维公司">
              <xl-option label="全部" value="0" />
              <xl-option label="未审核" value="1" />
              <xl-option label="审核通过" value="2" />
              <xl-option label="审核驳回" value="3" />
              <xl-option label="已核实" value="4" />
            </xl-select>
          </xl-form-item>
          <xl-form-item label="异常时间">
            <xl-date-picker
              v-model="form.date"
              type="datetimerange"
              range-separator="至"
              start-placeholder="请选择开始时间"
              end-placeholder="请选择结束时间"
            />
          </xl-form-item>
          <xl-form-item label="企业状态">
            <xl-select v-model="form.user" placeholder="请选择企业状态">
              <xl-option label="全部" value="0" />
              <xl-option label="未审核" value="1" />
              <xl-option label="审核通过" value="2" />
              <xl-option label="审核驳回" value="3" />
              <xl-option label="已核实" value="4" />
            </xl-select>
          </xl-form-item>
          <xl-form-item label="企业标签">
            <xl-select v-model="form.user" placeholder="请选择企业标签">
              <xl-option label="全部" value="0" />
              <xl-option label="未审核" value="1" />
              <xl-option label="审核通过" value="2" />
              <xl-option label="审核驳回" value="3" />
              <xl-option label="已核实" value="4" />
            </xl-select>
          </xl-form-item>
        </xl-row>
      </xl-collapse-transition>
    </xl-form>
    <BarChart />
    <xl-table-pageable
      :data="tableData"
      :loading="loading"
    >
      <xl-table-column type="index" width="50" />
      <xl-table-column prop="company" label="机构" />
      <xl-table-column prop="equipmentName" label="异常企业数量">
        <template slot-scope="scope">
          <span>{{ scope.row.equipmentName }}</span>
        </template>
      </xl-table-column>
      <xl-table-column prop="currentState" label="涉及生产设施数量" />
      <xl-table-column prop="runTime" label="涉及治理设施数量" />
      <xl-table-column prop="stopTime" label="平均生产时长" />
      <xl-table-column prop="stopTime" label="平均异常时长" />
    </xl-table-pageable>
  </div>
</template>

<script>
import BarChart from './barchart'
import { XlTablePageable } from 'xl-views'

export default {
  components: {
    BarChart,
    XlTablePageable
  },
  data() {
    return {
      form: {
        data: []
      },
      show: false,
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
    download() {
      console.log('download')
    }
  }
}
</script>

<style>

</style>
