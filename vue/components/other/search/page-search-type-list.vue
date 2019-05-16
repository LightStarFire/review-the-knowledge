<template>
  <div>
    <div
      v-for="(item, index) in searchTypeList"
      :key="'searchTypeList' + index"
      :style="'width: ' + item.width"
      class="search fl">
      <p class="zzl-formLabel">{{item.label}}</p>
      <el-input
        v-if="item.type === 'text' || item.type === 'textarea' || item.type === 'password'"
        v-model="initValue[item.prop]"
        :show-password="item.type === 'password'"
        :type="item.type"
        :disabled="item.disabled"
        :clearable="true"
        :placeholder="item.placeholder"
        @clear="item.event"
        @keyup.enter.native="item.event"
        class="hundredPercent">
      </el-input>
      <el-select
        v-else-if="item.type === 'select' || item.type === 'multipleSelect'"
        v-model="initValue[item.prop]"
        :multiple="item.type === 'multipleSelect'"
        :collapse-tags="item.type === 'multipleSelect'"
        :disabled="item.disabled"
        :clearable="true"
        :filterable="true"
        :placeholder="item.placeholder"
        @change="item.event"
        class="hundredPercent">
        <el-option
          v-for="(optItem, itemIndex) in item.optList"
          :key="itemIndex"
          :label="optItem.label"
          :value="optItem.value">
        </el-option>
      </el-select>
      <el-select
        v-else-if="item.type === 'groupSelect'"
        v-model="initValue[item.prop]"
        :disabled="item.disabled"
        :clearable="true"
        :filterable="true"
        :placeholder="item.placeholder"
        @change="item.event"
        class="hundredPercent">
        <el-option-group
          v-for="group in item.optList"
          :key="'optList' + group.label"
          :label="group.label">
          <el-option
            v-for="item in group.options"
            :key="group.label + item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-option-group>
      </el-select>
      <el-date-picker
        v-else-if="item.type === 'datePicker' || item.type === 'daterange'"
        v-model="initValue[item.prop]"
        :type="item.type"
        :disabled="item.disabled"
        :clearable="true"
        :placeholder="item.type === 'datePicker' ? item.label : ''"
        :start-placeholder="item.type === 'daterange' ? item.startLabel : ''"
        :end-placeholder="item.type === 'daterange' ? item.endLabel : ''"
        @change="item.event"
        value-format="yyyy-MM-dd"
        class="hundredPercent">
      </el-date-picker>
      <el-radio-group
        v-else-if="item.type === 'radioGroup'"
        v-model="initValue[item.prop]"
        @change="item.event">
        <el-radio
          v-for="(optItem, itemIndex) in item.optList"
          :key="itemIndex"
          :label="optItem.label">
          {{optItem.value}}
        </el-radio>
      </el-radio-group>
      <el-cascader
        v-else-if="item.type === 'cascader'"
        v-model="initValue[item.prop]"
        expand-trigger="hover"
        :clearable="true"
        :options=" item.optList "
        @change="item.event">
      </el-cascader>
      <slot v-else :name="item.prop" :data="item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-search-type-list",
  props: {
    searchTypeList: {
      required: true,
      type: Array
    },
    initValue: {
      // form的初始值
      type: Object,
      request: true
    }
  },
  data () {
    return {
      originalData: {}
    }
  },
  methods: {
    setDefaultValue() {
      this.originalData = JSON.parse(JSON.stringify(this.initValue));
      const formData = { ...this.initValue };
      // 设置默认值
      this.searchTypeList.forEach(({ key, value }) => {
        if (formData[key] === undefined || formData[key] === null) {
          formData[key] = value;
        }
      });
    },
    // 重置
    reset () {
      for(let key in this.originalData){
        if (this.initValue[key] !== undefined || this.initValue[key] !== null) {
          this.initValue[key] = this.originalData[key];
        }
      }
      this.$emit('toSearchData');
    }
  },
  mounted() {
    this.setDefaultValue();
  }
};
</script>

<style scoped>
</style>
