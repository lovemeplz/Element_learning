<template>
  <el-select v-model="value" placeholder="请选择" filterable @change="handleChange($event)" ref="search">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
      <span class="label">{{item.label}}</span>
      <span class="vlaue">{{item.value}}</span>
    </el-option>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕',
        disabled: true
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  methods: {
    filterFunc (val) {
      console.log(val)
    },
    handleChange (event) {
      console.log(event)
    }
  },
  mounted () {
    this.$refs.search.focus()
  }
}
</script>

<style>
</style>
