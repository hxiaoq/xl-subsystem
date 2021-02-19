<template>
  <div class="main-warpper">
    <xl-form :inline="true" :model="formInline" class="demo-form-inline">
      <xl-form-item label="所属机构">
        <xl-select v-model="formInline.org" placeholder="所属机构">
          <xl-option label="新联环保系统" value="shanghai" />
          <xl-option label="餐饮油烟监管系统" value="beijing" />
        </xl-select>
      </xl-form-item>
      <xl-form-item label="运营公司">
        <xl-select v-model="formInline.region" placeholder="运营公司">
          <xl-option label="发电设备" value="shanghai" />
          <xl-option label="电动设备" value="beijing" />
        </xl-select>
      </xl-form-item>
      <xl-form-item>
        <xl-button type="primary" @click="onSubmit">查询</xl-button>
        <xl-button type="success" @click="jump">新建企业</xl-button>
      </xl-form-item>
    </xl-form>
    <xl-table :data="tableData" stripe border height="400" style="width: 100%">
      <xl-table-column type="index" label="" />
      <xl-table-column prop="unit" label="企业名称" />
      <xl-table-column prop="maintenance" label="所属机构" />
      <xl-table-column prop="industry" label="运营公司" />
      <xl-table-column prop="industry" label="国民经济行业" />
      <xl-table-column prop="industry" label="统一社会信用代码" />
      <xl-table-column label="操作">
        <template slot-scope="scope">
          <xl-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</xl-button>
          <xl-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</xl-button>
        </template>
      </xl-table-column>
    </xl-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        org: '',
        region: ''
      },
      tableData: []
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    jump() {
      // 开始跳转
      this.$router.push({
        path: '/companyFile/newCompany',
        query: { selected: '2' }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.main-warpper {
  padding:16px;
  background-color: #f1f1f9;

}

</style>
