<template>
  <div>
    <navbar></navbar>
    <h3>基础用法</h3>
    <basic></basic>
    <h3>自定义</h3>
    <custom></custom>
    <h3>分组</h3>
    <group></group>
    <h3>搜索</h3>
    <search></search>
  </div>
</template>

<script>
import navbar from '../public/navbar'
import basic from './components/basic'
import custom from './components/custom'
import group from './components/group'
import search from './components/search'
export default {
  components: {
    navbar,
    basic,
    custom,
    group,
    search
  }
}
</script>

<style>
</style>
