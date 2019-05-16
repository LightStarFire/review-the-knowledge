/* *
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
* */
const install = (Vue) => {
  const Bus = new Vue({
    methods: {
      emit (event, ...args) {
        this.$emit(event, ...args)
      },
      on (event, callback) {
        this.$on(event, callback)
      },
      off (event, callback) {
        this.$off(event, callback)
      }
    }
  })

  Vue.prototype.$bus = Bus
};

export default install
