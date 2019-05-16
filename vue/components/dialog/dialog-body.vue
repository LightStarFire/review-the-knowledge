<!--
例子：<dialog-body ref="dialogBodyRef" :dialogTitle="zzlLang.updatePassword" @submitData="confirm">
介绍：封装的el-dialog
      dialogTitle  --  模态框的标题
      dialogWidth  --  模态框的宽度
      dialogTop  --  模态框距离顶部的高度
      @submitData  --  提交数据触发的函数
      @showDialog  --  打开模态框触发的函数
      @closeDialog  --  关闭模态框触发的函数
-->
<template>
  <el-dialog
    append-to-body
    :top="dialogTop"
    :width="dialogWidth"
    :visible.sync="dialogShow"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    custom-class="modalDialog"
    :show-close="false">
    <div class="dialog-body">
      <dialog-title :dialogTitle="dialogTitle" @closeDialog="closeDialog"></dialog-title>
      <div class="content">
        <slot name="dialogBodyContent"></slot>
      </div>
      <div class="clearFix" style="padding: 0 26px 10px">
        <button class="zzl-btn zzl-success fr" @click="submitData">{{zzlLang.determine}}</button>
        <button class="zzl-btn fr" style="margin-right: 12px" @click="closeDialog">{{zzlLang.cancelOff}}</button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import dialogTitle from './dialog-title'
export default {
  name: "dialogBody",
  components: {dialogTitle},
  props: {
    dialogTitle: {
      // 模态框的标题
      type: String,
      default: '模态框标题'
    },
    dialogWidth: {
      // 模态框的宽度
      type: String,
      default: '500px'
    },
    dialogTop: {
      // 模态框距离顶部的高度
      type: String,
      default: '15vh'
    },
  },
  data () {
    return {
      dialogShow: false
    }
  },
  methods: {
    submitData () {
      // 提交数据
      this.$emit('submitData');
    },
    showDialog () {
      // 显示模态框
      this.dialogShow = true;
      this.$emit('showDialog');
    },
    closeDialog () {
      // 关闭模态框
      this.dialogShow = false;
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
