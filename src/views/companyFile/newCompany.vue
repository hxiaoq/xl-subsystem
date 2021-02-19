<template>
  <div class="main-warpper">
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
    </xltabcard>
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
      form: {}
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      // 开始跳转
      this.$router.push({
        path: '/companyFile/newCompanyDetail',
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
