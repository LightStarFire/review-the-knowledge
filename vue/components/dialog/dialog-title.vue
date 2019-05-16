<!--
例子：<dialog-title :dialogTitle="dialogTitle" @closeDialog="closeDialog"></dialog-title>
介绍：封装的el-dialog
      dialogTitle  --  模态框的标题
      @closeDialog  --  关闭模态框触发的函数
-->
<template>
  <div class="title clearFix">
    <span class="fl zzl-title">{{dialogTitle}}</span><i class="zzl_icons zion-close fr" @click="closeDialog"></i>
  </div>
</template>

<script>
export default {
  name: "dialogTitle",
  props: {
    dialogTitle: {
      type: String,
      default: '模态框标题'
    }
  },
  methods: {
    closeDialog () {
      this.$emit('closeDialog');
    }
  }
}
</script>

<style scoped lang="scss">
  .title {
    padding: 12px 20px 12px;
    font-weight: bold;
    background-color: #f8f8f8;
    border-bottom: 1px solid #e6e6e6;
    i{
      cursor: pointer;
      font-size: 12px;
      font-weight: lighter;
      &:hover{
        color: #07c29e;
      }
    }
  }
</style>
