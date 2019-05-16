<!--
例子： <page-title :titleList="$route.meta.titleList" @titleClick='titleClick'></page-title>
介绍：封装的page-title
      titleList  --  title的一些信息{id[用来区别是哪一个页面]、pageName、iconName}
      titleClick  --  title点击
      nowModule  --  当前页面的id
-->
<template>
  <div class="title zzl-title clearFix">
    <template v-for="(item, index) in titleList">
      <span
        @click="titleClick(item.id)"
        :key="'titleList' + index"
        class="fl"
        :class="{'active' : nowModule === item.id}"
      >
        <i :class="'zzl_icons ' + item.iconName"></i>
        {{item.pageName}}
      </span>
    </template>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "pageTitle",
  data() {
    return {
      titleList: this.$route.meta.titleList,
      nowModule: ""
    };
  },
  mounted() {
    if (this.status === '1') {
      this.initTitle();
    }
  },
  computed: {
    status () {
      // 是否登录 前端
      return this.zzlStorage.getSessionStorage('status');
    }
  },
  methods: {
    // module  --  sessionStorage
    moduleToSession (_id = '', _isClick = false) {
      // 获取存着的nowModule
      let nowModule = this.zzlStorage.getSessionStorage('nowModule') || '[]';
      let moduleArr = JSON.parse(nowModule);
      let routeName = this.$route.name;
      let attrId = _id || this.$route.meta.titleList[0].id;
      let obj = {
        routeName: routeName,
        name: attrId
      };
      if (!this.zzlFormat.isEmptyArray(moduleArr)) {
        // 存在 即判断有没有存这个route的数据
        let _index = -1;
        for (let i in moduleArr) {
          if (moduleArr[i].routeName === routeName) {
            _index = i;
            break
          }
        }
        if (_index === -1) {
          // 没有
          this.nowModule = attrId;
          moduleArr.push(obj);
        } else {
          // 有
          if (!_isClick) {
            this.nowModule = moduleArr[_index].name;
          } else {
            this.nowModule = attrId;
            moduleArr[_index].name = attrId;
          }
        }
      } else {
        // 不存在
        this.nowModule = attrId;
        moduleArr.push(obj);
      }
      this.zzlStorage.setSessionStorage('nowModule', JSON.stringify(moduleArr));
    },
    // 点击title
    titleClick(_id) {
      if (_id !== this.nowModule) {
        this.moduleToSession(_id, true);
        this.$emit("input", this.nowModule);
        this.$emit("titleClick", _id);
      }
    },
    // 初始化title
    initTitle() {
      this.moduleToSession();
      this.$emit("input", this.nowModule);
    }
  }
};
</script>

<style scoped lang="scss">
.title {
  padding: 0;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 12px;
  .fl {
    padding: 0 8px 6px;
    margin: 0 12px;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    transition: all 0.3s;
    i {
      font-size: 16px;
      margin-right: 8px;
    }
    &:first-child {
      margin-left: 0;
    }
  }
  .active {
    color: #07c29e;
    border-bottom: 3px solid #07c29e;
  }
}
</style>
