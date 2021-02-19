<template>
  <div class="main-warpper">
    <xl-tabs v-model="activeName" @tab-click="handleClick">
      <xl-tab-pane label="企业档案信息" name="first">
        <XlTabCard
          title="企业档案基本信息"
          icon="s-order"
          title-size="14px"
        >
          <template>
            <div class="content">
              <xl-form ref="form" :model="form" label-width="80px">
                <xl-col :span="12">
                  <xl-form-item label="企业名称">
                    <xl-input v-model="form.name" />
                  </xl-form-item>
                </xl-col>
                <xl-col :span="12">
                  <xl-form-item label="行政区域">
                    <xl-select v-model="form.region" placeholder="请选择行政区域">
                      <xl-option label="区域一" value="shanghai" />
                      <xl-option label="区域二" value="beijing" />
                    </xl-select>
                  </xl-form-item>
                </xl-col>
                <xl-col :span="12">
                  <xl-form-item label="所属机构">
                    <xl-select v-model="form.region" placeholder="请选择机构">
                      <xl-option label="区域一" value="shanghai" />
                      <xl-option label="区域二" value="beijing" />
                    </xl-select>
                  </xl-form-item>
                </xl-col>
                <xl-col :span="24">
                  <xl-form-item style="text-align:center">
                    <xl-button type="primary" @click="onSubmit">保存</xl-button>
                  </xl-form-item>
                </xl-col>
              </xl-form>
            </div>
          </template>
        </XlTabCard>
        <XlTabCard
          title="企业联系人管理"
          icon="s-order"
          title-size="14px"
        >
          <template>
            <div class="content">
              企业联系人管理
            </div>
          </template>
        </XlTabCard>
        <XlTabCard
          title="企业业务状态"
          icon="s-order"
          title-size="14px"
        >
          <template>
            <div class="content">
              企业业务状态
            </div>
          </template>
        </XlTabCard>
        <XlTabCard
          title="企业环保档案信息"
          icon="s-order"
          title-size="14px"
        >
          <template>
            <div class="content">
              企业环保档案信息
            </div>
          </template>
        </XlTabCard>
        <XlTabCard
          title="附件"
          icon="s-order"
          title-size="14px"
        >
          <template>
            <div class="content">
              附件
            </div>
          </template>
        </XlTabCard>
      </xl-tab-pane>
      <xl-tab-pane label="输入计算关系管理" name="second">
        <xl-col :span="24" style="text-align:right;margin-bottom:10px;">
          <xl-button type="success">添加单元</xl-button>
          <xl-button type="success">添加设备</xl-button>
        </xl-col>
        <xl-table :data="tableData" stripe border height="400" style="width: 100%">
          <xl-table-column type="index" label="" />
          <xl-table-column prop="unit" label="设备名称" />
          <xl-table-column prop="maintenance" label="方向" />
          <xl-table-column prop="industry" label="加减" />
          <xl-table-column prop="industry" label="系数" />
          <xl-table-column prop="industry" label="启用时间" />
          <xl-table-column prop="industry" label="结束时间" />
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
      </xl-tab-pane>
    </xl-tabs>
  </div>
</template>
<script>
import { XlTabCard } from 'xl-views'
export default {
  components: {
    XlTabCard
  },
  data() {
    return {
      form: {},
      activeName: 'first',
      tableData: []
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleClick(tab, event) {
      console.log(tab, event)
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
  padding: 16px;
  background-color: #f1f1f9;
}
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    border: 1px solid #e8e8e8
}
</style>
