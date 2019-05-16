<!--
例子：<table-content :tableData="tableConfig.tableData" :columns="tableConfig.config">
        <template slot="operation" slot-scope="scope">
          <i @click="updateTableData(scope.row)" class="zzl_icons zion-write" title="修改"></i>
          <i @click="deleteTableData(scope.row)" class="zzl_icons zion-delete" title="删除"></i>
        </template>
      </table-content>
介绍：封装的table
      tableData  -- table的数据
      columns  --  table每一项的配置
         prop: 'name',
        label: '广告类型',
        sort: false,
        type: 'text',
        fixed: false,
        minWidth: ''
        parentsPaging  --  分页的参数 页码 页长 总数
        @toGetData  --  改变页码、页长触发的函数
        maxHeight  --  最大高度
        pagingShow  --  是否显示分页
        isMultipleTable  --  是否有checkBox
        // 要使用复选框 tableData 必须有id name 属性
        selectable  --  复选框必传数组 表示那些可以选择
        keepSelect  --  跳页或改变页大小的时候还需保持选择的方法
          this.$nextTick(() => {
            this.$refs.tableContentRef.keepSelect();
          })


        需要特殊处理的数据 <template slot="[你porp的值]" slot-scope="scope"> slot-scope="scope"和element的原本的作用一样

        注：有其他没写到的属性你需要的话，在不影响其他功能上可以进行扩展 比如说 checkBox传递id 折叠表格
-->
<template>
  <div class="tableList">
    <el-table
      ref="multipleTable"
      :data="tableData"
      :max-height="maxHeight"
      stripe
      border
      row-key="id"
      @sort-change="sortChange"
      @select="tabSelect"
      @select-all="tabSelectAll"
      @cell-click="cellClick">
      <el-table-column
        v-if="isMultipleTable"
        align="center"
        type="selection"
        :selectable='(row, index) => {
          return selectable.length === 0 ? 1 : selectable[index] ? 1 : 0
        }'
        width="55">
      </el-table-column>
      <el-table-column
        v-for="(column, index) in columns"
        :prop="column.prop"
        :key="index"
        :label="column.label"
        :sortable="column.sort ? 'custom' : false"
        :fixed="column.fixed"
        :min-width="column.minWidth"
        :width="column.width ? column.width : 'auto'"
        align="center"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <span v-if="column.type === 'text'">{{scope.row[column.prop] === '' ? '--' : scope.row[column.prop]}}</span>
          <slot v-else :name="column.prop" :data="scope"></slot>
        </template>
      </el-table-column>
    </el-table>
    <div class="block clearFix" v-show="pagingShow">
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
  </div>
</template>

<script>
export default {
  name: "table-body",
  props: {
    // 表格数据
    tableData: {
      type: Array,
      default: () => []
    },
    // 是否显示分页
    pagingShow: {
      type: Boolean,
      default: true
    },
    // 列
    columns: {
      type: Array,
      default: () => []
    },
    // 最大高度
    maxHeight: {
      type: [String, Number],
      default: null
    },
    // 分页的参数
    parentsPaging: {
      type: Object,
      default: () => {
        return {
          pageNum: 1,
          pageSize: 20,
          count: 0,
          order: 'created_time',
          by: 0
        }
      }
    },
    // 是否可选 复选框
    selectable: {
      type: Array,
      default: () => []
    },
    isMultipleTable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tags: [] // 选中的ID
    }
  },
  methods: {
    // 单元格点击
    cellClick (row, column, cell, event) {
      this.$emit('cellClick', row, column, cell, event)
    },
    // 复选框
    checkboxT(row, index){
      if(row.status === 'P'){
        return 1;
      }else{
        return 0;
      }
    },
    // 全选
    tabSelectAll (selection) {
      if (selection.length > 0) {
        for (let i in this.tableData) {
          if (this.selectable.length === 0 || this.selectable[i]) {
            let flag = true
            for (let j in this.tags) {
              if (this.tags[j].id === this.tableData[i].id) {
                flag = false
              }
            }
            if (flag) {
              this.tags.push(
                {
                  id: this.tableData[i].id,
                  name: this.tableData[i].name,
                }
              )
            }
          }
        }
      } else {
        let index = []
        for (let i in this.tableData) {
          for (let j in this.tags) {
            if (this.tags[j].id === this.tableData[i].id) {
              index.push(j)
            }
          }
        }
        let n = 0
        for (let i of index) {
          this.tags.splice(i - n, 1)
          n++
        }
      }
      this.$emit('input', this.tags);
      console.log(this.tags)
    },
    // 单选
    tabSelect (selection, row) {
      let flag = false
      let index = -1
      for (let i in this.tags) {
        if (this.tags[i].id === row.id) {
          flag = true
          index = i
        }
      }
      if (flag) {
        this.tags.splice(index, 1)
      } else {
        this.tags.push(
          {
            id: row.id,
            name: row.name
          }
        )
      }
      this.$emit('input', this.tags);
      console.log(this.tags)
    },
    // 排序
    sortChange (column) {
      this.parentsPaging.order = column.prop;
      this.parentsPaging.by = column.order === 'ascending' ? 0 : 1;
      this.$emit('toGetData');
    },
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
    },
    // 保持选中
    keepSelect () {
      console.log(this.tags);
      for (let i = 0; i < this.tags.length; i++) {
        for (let j = 0; j < this.tableData.length; j++) {
          if (this.tags[i].id === this.tableData[j].id) {
            this.$refs.multipleTable.toggleRowSelection(this.tableData[j]);
          }
        }
      }
      this.$emit('input', this.tags);
    }
  }
}
</script>

<style scoped lang="scss">
  .block{
    margin-top: 12px;
  }
  .block .el-pagination{
    float: right;
  }
</style>
