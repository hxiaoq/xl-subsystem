<template>
  <div>
    <xl-row>
      <xl-col :span="4">
        机构树
        <xl-button type="primary" @click="view(abnormalPageType.statistics)">查看机构统计信息</xl-button>
        <xl-button type="primary" @click="view(abnormalPageType.companyList)">查看企业列表</xl-button>
        <xl-button type="primary" @click="view(abnormalPageType.company)">查看企业异常列表</xl-button>
        <xl-button type="primary" @click="view(abnormalPageType.companyDetail)">查看产污治污异常信息</xl-button>
      </xl-col>
      <xl-col :span="20">
        <div>
          <xl-row>治理设施异常分析</xl-row>
          <xl-row>
            <abnormalStatistics v-if="type === abnormalPageType.statistics" />
            <abnormalStatisticsDetail v-if="type === abnormalPageType.companyList" />
            <abnormalCompany v-if="type === abnormalPageType.company" />
            <abnormalCompanyDetail v-if="type === abnormalPageType.companyDetail" />
          </xl-row>
        </div>
      </xl-col>
    </xl-row>
  </div>
</template>

<script>
import abnormalStatistics from './components/abnormal-statistics'
import abnormalStatisticsDetail from './components/abnormal-statistics-detail'
import abnormalCompany from './components/abnormal-company'
import abnormalCompanyDetail from './components/abnormal-company-detail'
import { abnormalPageType } from '../common'

export default {
  components: {
    abnormalStatistics,
    abnormalStatisticsDetail,
    abnormalCompany,
    abnormalCompanyDetail
  },
  data() {
    return {
      abnormalPageType,
      type: 0 // 当前页面类型
    }
  },
  methods: {
    view(type) {
      this.type = type
    }
  }
}
</script>

<style>

</style>
