<template>
  <div class="main-warpper">
    <xl-row :gutter="12">
      <xl-col :span="16">
        <XlTabCard title="基本情况" icon="ios-home" url="/review" class="test1">
          <template>
            <xl-panel :background-color="changedColor">
              <div class="panel-content">
                <div class="image" @click="resolvePath">
                  <img height="74px" :src="leafUrl" alt="leaf">
                </div>
                <xl-number-unit :count="5" unit="个" label="疑似问题点" />
                <xl-number-unit :count="5" unit="个" label="疑似问题点" />
                <xl-number-unit :count="5" unit="个" label="疑似问题点" />
                <xl-number-unit :count="5" unit="个" label="疑似问题点" />
              </div>
            </xl-panel>
          </template>
        </XlTabCard>
      </xl-col>
      <xl-col :span="4">
        <XlTabCard title="污处设施异常" icon="ios-beaker">
          <template>
            <xl-panel :background-color="signleColor" title="今日">
              <div class="panel-content">
                <xl-number-unit :count="6" unit="个" label="监测点数量" />
              </div>
            </xl-panel>
          </template>
        </XlTabCard>
      </xl-col>
      <xl-col :span="4">
        <XlTabCard title="大气污染管控" icon="ios-briefcase">
          <template>
            <xl-panel :background-color="signleColor" title="今日">
              <div class="panel-content">
                <xl-number-unit :count="6" unit="个" label="监测点数量" />
              </div>
            </xl-panel>
          </template>
        </XlTabCard>
      </xl-col>
    </xl-row>
    <xl-row :gutter="12" style="paddingTop: 12px">
      <xl-col :span="16">
        <XlTabCard title="企业分布" icon="ios-home">
          <template>
            <div class="chart-wrapper">
              <BarChart />
            </div>
          </template>
        </XlTabCard>
      </xl-col>
      <xl-col :span="8">
        <XlTabCard title="异常排名" icon="ios-home">
          <template>
            <div class="chart-wrapper">
              <VBarChart />
            </div>
          </template>
        </XlTabCard>
      </xl-col>
    </xl-row>
    <xl-row style="paddingTop: 12px">
      <xl-col :span="24">
        <XlTabCard title="用电量" icon="ios-home">
          <template>
            <div class="chart-wrapper">
              <LineChart />
            </div>
          </template>
        </XlTabCard>
      </xl-col>
    </xl-row>
  </div>

</template>

<script>
import { XlTabCard, XlPanel, XlNumberUnit } from 'xl-views'
import BarChart from './components/barChart'
import VBarChart from './components/vBarChart'
import LineChart from './components/lineChart'

export default {
  components: {
    XlTabCard,
    XlPanel,
    XlNumberUnit,
    BarChart,
    VBarChart,
    LineChart
  },
  data() {
    return {
      changedColor: ['#46dd91', '#52bbd7'],
      leafUrl: require('../../assets/leaf.png'),
      signleColor: '#fb9613'
    }
  },
  methods: {
    resolvePath() {
      this.$openTab({
        name: 'Review',
        query: {
          test: '1'
        }
      }, { sysCode: '5', id: '3000', resId: 6297243509895180, resName: '企业详情', icon: 'el-icon-ios-bulb-outline' })
    }
  }
}
</script>

<style lang="scss" scoped>
.main-warpper {
  padding:16px;
  background-color: #f1f1f9;
  .xl-panel {
    width: unset;
  }

  .panel-content {
    margin: 5px 0 15px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .image {
    width: 90px;
    padding-top: 16px;
  }
  image {
    display: block;
    width: 100%;
  }
}

</style>
