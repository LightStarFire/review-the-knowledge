<!--
例子：<table-title :iconShow="false" theTitle="导航列表"></table-title>
介绍：封装的表格的标题
      theTitle  --  表格的标题
      iconName  --  icon的名字
      iconShow  --  icon是否显示
      @back  --  icon点击触发的事件
-->
<template>
  <div class="tableTitle">
    <el-tooltip :open-delay="300" class="item" effect="light" content="返回" placement="top">
      <i v-show="iconShow" @click="back" :class="'zzl_icons ' + iconName"></i>
    </el-tooltip>
    {{theTitle}}
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tableTitle",
  props: {
    theTitle: {
      default: '标题'
    },
    iconShow: {
      default: true
    },
    iconName: {
      type: String,
      default: 'zion-back'
    }
  },
  methods: {
    back () {
      this.$emit('back')
    }
  }
}
</script>

<style scoped lang="scss">
  .tableTitle{
    border:1px solid #e6e6e6;
    border-bottom: 0;
    padding: 7px 10px;
    line-height: initial;
    font-size: 14px;
    color: #45494d;
    font-weight: bold;
    background-color: #fbfbfb;
    i{
      font-size: 14px;
      cursor: pointer;
      &:hover{
        opacity: .8;
      }
    }
  }
</style>
