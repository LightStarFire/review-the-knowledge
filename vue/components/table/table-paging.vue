<!--
例子：<table-paging :parentsPaging="table" @toGetData="getUserTableData"></table-paging>
介绍：封装的el-pagination
      parentsPaging  --  分页的参数 页码 页长 总数
      @toGetData  --  改变页码、页长触发的函数
-->
<template>
  <div class="block clearFix">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="parentsPaging.pageNum"
      :page-size="parentsPaging.pageSize"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="parentsPaging.count">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "paging",
  props: {
    parentsPaging: {
      type: Object,
      default: () => {
        return {
          pageNum: 1,
          pageSize: 20,
          count: 0
        }
      }
    }
  },
  methods: {
    // 每页数据数改变
    handleSizeChange(_val) {
      this.parentsPaging.pageNum = 1;
      this.parentsPaging.pageSize = _val;
      this.$emit('toGetData');
    },
    // 页码改变
    handleCurrentChange(_val) {
      this.parentsPaging.pageNum = _val;
      this.$emit('toGetData');
    }
  }
}
</script>

<style scoped>
  .block{
    margin-top: 12px;
  }
  .block .el-pagination{
    float: right;
  }
</style>
