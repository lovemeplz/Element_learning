<template>
  <div class="layout">
    <navbar></navbar>
    <h3>基础布局</h3>
    <layout-basic></layout-basic>
    <h3>分栏布局</h3>
    <layout-gutter></layout-gutter>
    <h3>混合布局</h3>
    <layout-mix></layout-mix>
    <h3>分栏偏移</h3>
    <layout-offset></layout-offset>
    <h3>flex</h3>
    <layout-flex></layout-flex>
    <h3>响应式</h3>
    <layout-responsive></layout-responsive>
  </div>
</template>

<script>
import navbar from '../public/navbar'
import layoutBasic from './components/basic'
import layoutGutter from './components/gutter'
import layoutMix from './components/mix'
import layoutOffset from './components/offset'
import layoutFlex from './components/flex'
import layoutResponsive from './components/responsive'
export default {
  components: {
    navbar,
    layoutBasic,
    layoutGutter,
    layoutMix,
    layoutOffset,
    layoutFlex,
    layoutResponsive
  }
}
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
