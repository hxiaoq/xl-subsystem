<template>
  <div>
    <xl-form
      :inline="true"
      :model="form"
      class="demo-form-inline"
    >
      <xl-row>
        <xl-form-item label="企业名称">
          <xl-input
            v-model="form.user"
            placeholder="请输入污染源企业名称"
          />
        </xl-form-item>
        <xl-form-item label="一键筛选">
          <xl-radio-group v-model="form.radio1">
            <xl-radio-button label="管控企业" />
            <xl-radio-button label="运行中" />
            <xl-radio-button label="重点污染源" />
            <xl-radio-button label="涉气企业" />
          </xl-radio-group>
        </xl-form-item>
        <xl-form-item>
          <xl-button type="primary" @click="download">下载</xl-button>
          <xl-button type="primary">高级搜索</xl-button>
        </xl-form-item>
      </xl-row>
      <xl-row>
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
    </xl-form>
    <xl-table-pageable
      :data="tableData"
      :loading="loading"
    >
      <xl-table-column type="index" width="50" />
      <xl-table-column prop="company" label="机构" />
      <xl-table-column prop="equipmentName" label="企业名称" />
      <xl-table-column prop="currentState" label="运维公司" />
      <xl-table-column prop="runTime" label="行业" />
      <xl-table-column prop="stopTime" label="异常治理设施数量" />
      <xl-table-column prop="stopTime" label="异常总时长" />
      <xl-table-column prop="stopTime" label="操作">
        <template slot-scope="scope">
          <button size="mini" type="primary" @onClick="view(scope.row)">查看详情</button>
        </template>
      </xl-table-column>

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
        data: [],
        radio1: '',
        user: ''
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
    view(row) {
      console.log('查看详情')
    },
    download() {
      console.log('下载')
    }
  }
}
</script>

<style>

</style>
