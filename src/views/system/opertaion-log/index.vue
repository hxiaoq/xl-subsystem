<template>
  <div>
    <xl-form
      :inline="true"
      :model="form"
      class="demo-form-inline"
    >
      <xl-form-item label="账号">
        <xl-input
          v-model="form.user"
          placeholder="请输入账号"
        />
      </xl-form-item>
      <xl-form-item label="操作类型">
        <xl-select v-model="form.user" placeholder="请选择操作类型">
          <xl-option label="全部" value="0" />
          <xl-option label="未审核" value="1" />
          <xl-option label="审核通过" value="2" />
          <xl-option label="审核驳回" value="3" />
          <xl-option label="已核实" value="4" />
        </xl-select>
      </xl-form-item>
      <xl-form-item label="操作时间">
        <xl-date-picker
          v-model="form.date"
          type="datetimerange"
          range-separator="至"
          start-placeholder="请选择开始时间"
          end-placeholder="请选择结束时间"
        />
      </xl-form-item>
      <xl-form-item label="功能">
        <xl-select v-model="form.user" placeholder="请选择功能">
          <xl-option label="全部" value="0" />
          <xl-option label="未审核" value="1" />
          <xl-option label="审核通过" value="2" />
          <xl-option label="审核驳回" value="3" />
          <xl-option label="已核实" value="4" />
        </xl-select>
      </xl-form-item>
      <xl-form-item label="日志类型">
        <xl-select v-model="form.user" placeholder="请选择日志类型">
          <xl-option label="全部" value="0" />
          <xl-option label="未审核" value="1" />
          <xl-option label="审核通过" value="2" />
          <xl-option label="审核驳回" value="3" />
          <xl-option label="已核实" value="4" />
        </xl-select>
      </xl-form-item>
      <xl-form-item label="事件内容">
        <xl-input
          v-model="form.user"
          placeholder="请输入时间内容"
        />
      </xl-form-item>
      <xl-form-item label="IP地址">
        <xl-input
          v-model="form.user"
          placeholder="请输入IP地址"
        />
      </xl-form-item>
      <xl-form-item>
        <xl-button type="primary" @click="query">查询</xl-button>
        <xl-button type="primary" @click="reset">导出</xl-button>
      </xl-form-item>
    </xl-form>
    <xl-table-pageable
      :data="tableData"
      :loading="loading"
      :pagination="pagination"
      style="width: 100%"
      @current-page-change="displayLoading"
    >
      <xl-table-column type="index" width="50" />
      <xl-table-column prop="company" label="账号" />
      <xl-table-column prop="equipmentName" label="用户IP" />
      <xl-table-column prop="currentState" label="单位" />
      <xl-table-column prop="runTime" label="部门" />
      <xl-table-column prop="stopTime" label="操作时间" />
      <xl-table-column prop="stopTime" label="功能" />
      <xl-table-column prop="stopTime" label="操作类型" />
      <xl-table-column prop="stopTime" label="日志类型" />
      <xl-table-column prop="stopTime" label="时间内容" />
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
        user: '',
        region: '',
        date: []
      },
      tableData: [
        {
          company: '测试用公司1',
          equipmentName: '42#测试车间111-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '测试用公司1',
          equipmentName: '43测试车间111-2#风机',
          currentState: '停用',
          runTime: '-',
          stopTime: '8小时'
        },
        {
          company: '测试用公司1',
          equipmentName: '42#测试车间111-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '测试用公司2',
          equipmentName: '42#测试车间111-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '测试用公司13',
          equipmentName: '43测试车间111-2#风机',
          currentState: '停用',
          runTime: '-',
          stopTime: '8小时'
        },
        {
          company: '测试用公司14',
          equipmentName: '42#测试车间111-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '测试用公司16',
          equipmentName: '42#测试车间111-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '测试用公司1',
          equipmentName: '42#测试车间111-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '测试用公司17',
          equipmentName: '42#测试车间111-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '测试用公司18',
          equipmentName: '42#测试车间111-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        }
      ],
      pagination: {
        pageSize: 10,
        pageIndex: 1,
        total: 52
      },
      loading: false
    }
  },
  methods: {
    displayLoading() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    query() {
      console.log('submit!')
    },
    reset() {
      this.form.user = ''
      this.form.region = ''
      this.form.date = []
    }
  }
}
</script>
