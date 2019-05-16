<!--
列子：<page-search
      :searchConfig="searchConfig.config"
      :searchValue="searchConfig.searchValue"
      @toSearchData="searchData"
      ref="pageSearchRef">
          <template slot="showList"></template>
          <template slot="hideList"></template>
    </page-search>
介绍：封装的搜索栏
      searchConfig  --  搜素项配置
      具体配置：
       config: {
        // 显示在外面的搜索
        showList:[
          {
            type: 'select',
            prop: 'type',
            label: '广告类型',
            placeholder: '请选择广告类型',
            disabled: false,
            width: '150px',
            optList: [
              {
                label: '1x',
                value: 1
              },
              {
                label: '2x',
                value: 2
              },
              {
                label: '3x',
                value: 3
              }
            ],
            event: () => {
              _that.$bus.emit('activityBgSearch')
            },
          }
        ],
        // 隐藏的搜索 没有传空
        hideList: [
          {
            type: 'text',
            prop: 'kw',
            label: '广告内容',
            placeholder: '请输入广告内容',
            disabled: false,
            width: '150px',
            event: () => {
              _that.$bus.emit('activityBgSearch')
            },
          }
        ]
      },
    searchValue  --  搜素项绑定的值 与上面的prop对应
      searchValue: {
        showCondition: {
          type: 1
        },
        hideCondition: {
          kw: '666'
        }
      }
    注：
      选项调用方法使用
       1.  _that.$bus.emit('activityBgSearch')
       2. created () {
            // 创建Bus监听
            this.$bus.on('activityBgSearch', this.searchData)
          },
       3. beforeDestroy () {
            // 销毁Bus监听
            this.$bus.off('activityBgSearch', this.searchData)
          },
     @toSearchData  --  重置触发数据刷新
     resetList  --  重置的方法
-->

<template>
  <div class="top-condition">
    <div class="condition clearFix">
      <page-search-type-list
        :searchTypeList="searchConfig.showList"
        :initValue="searchValue.showCondition"
        @toSearchData="toSearchData"
        ref="showRef">
      </page-search-type-list>
      <slot name="showList"></slot>
    </div>
    <template v-if="!isEmptyHideList">
      <transition name="fadeHigh">
        <div class="condition clearFix" v-show="showMore">
          <page-search-type-list
            :searchTypeList="searchConfig.hideList"
            :initValue="searchValue.hideCondition"
            @toSearchData="toSearchData"
            ref="hideRef">
          </page-search-type-list>
          <slot name="hideList"></slot>
        </div>
      </transition>
      <div class="botton-img">
        <img :src="imgSrc" @click="openMore" />
      </div>
    </template>
  </div>
</template>

<script>
import pageSearchTypeList from './page-search-type-list';
export default {
  name: 'page-search',
  components: {pageSearchTypeList},
  props: {
    searchConfig: {
      required: true,
      type: Object,
      default: () => {
        return {
          showList: [],
          hideList: []
        }
      },
    },
    searchValue: {
      required: true,
      type: Object,
      default: () => {
        return {
          showCondition: {},
          hideCondition: {}
        }
      }
    },
    parentShowMore: {
      default: false
    }
  },
  data () {
    return {
      showMore: this.parentShowMore
    }
  },
  computed: {
    isEmptyHideList () {
      return this.zzlFormat.isEmptyArray(this.searchConfig.hideList)
    },
    imgSrc() {
      if (!this.zzlFormat.isEmptyArray(this.searchConfig.hideList) && this.showMore) {
        return '/static/img/top.png'
      }
      return '/static/img/button.png'
    }
  },
  methods: {
    // 子组件重置触发函数
    toSearchData () {
      this.$emit('toSearchData');
    },
    // 打开
    openMore () {
      this.showMore = !this.showMore;
      if (!this.showMore) {
        this.resetHideList();
      }
    },
    // 重置隐藏部分的筛选
    resetHideList () {
      if (!this.isEmptyHideList) {
        this.$refs.hideRef.reset();
      }
    },
    // 重置筛选
    resetList () {
      this.$refs.showRef.reset();
      this.resetHideList();
    }
  }
}
</script>

<style scoped lang="scss">
  .top-condition {
    padding: 0 12px;
    margin: 0 -12px 12px;
    border-bottom: 12px solid #f1f1f1;
    position: relative;
    .condition{
      overflow: hidden;
    }
    .botton-img {
      width: 100%;
      position: absolute;
      left: 0;
      text-align: center;
      img {
        cursor: pointer;
      }
    }
  }
</style>
