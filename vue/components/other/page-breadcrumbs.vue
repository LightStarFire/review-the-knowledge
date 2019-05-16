<!--
例子：<page-breadcrumbs :breadcrumbsList="breadcrumbsList"></page-breadcrumbs>
介绍：封装的面包屑导航
      breadcrumbsList：[
       {
          name: '学习路径', // 页面名称
          routeName: 'studyPath' // 对应route name
        }
      ]
-->
<template>
  <div class="fr zzl-breadCrumbs">
    <template v-for="(item, index) in breadcrumbsList">
      <span @click="toRouter(item.routeName, index)" :key="item.routeName + index" :class="{'hoverShow': index !== breadcrumbsListLength}">{{item.name}}</span><span v-if="index !== breadcrumbsListLength" class="segmentation">/</span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'page-breadcrumbs',
  props: {
    breadcrumbsList: {
      required: true,
      type: Array,
      default: () => []
    }
  },
  computed: {
    breadcrumbsListLength () {
      return this.breadcrumbsList.length - 1
    }
  },
  methods: {
    toRouter (routeName, index) {
      if (this.breadcrumbsListLength === index) {
        return;
      }
      this.$router.push({name: routeName});
    }
  }
}
</script>

<style scoped lang="scss">
.hoverShow:hover {
  color: #07c29e;
  cursor: pointer;
}
</style>
