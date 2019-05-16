<!--
例子： <form-add-update
        slot="dialogBodyContent"
        ref="parentsFormRef"
        :formConfig="formConfig.config"
        :initialValue="formConfig.form"
        :rules="formConfig.rules">
        </form-add-update>
介绍：封装的el-form
      formConfig  --  存储着form表单的各个项
      initialValue  --  form的初始值
      labelPosition  --  label的位置 default: top
      rules  --  form的验证规则
      labelWidth  --  label的宽度

      需配合form.js使用 使用结构如下：对象里面的属性名称要改的话需改对应处
      export const addUpdate = {
          form: {},
          rules: {},
          config: {
            formItemList: []
          }
      }

      目前感觉比较好的使用方法是把form.js里面的数据作为默认数据 需要使用的时候使用deepClone一份再来改变数据
      这样做其实只是为了能很好的重置数据 应该还有更好的方法

      created () {
        this.formConfig = this.zzlFormat.deepClone(stepOneAddUpdate);
      },

-->
<template>
  <el-form :model="initialValue"  :label-position="labelPosition" ref="formRef" :rules="rules" :label-width="labelWidth">
    <el-row>
      <template  v-for="(item, index) in formConfig.formItemList">
        <el-col
          v-if="!item.noShow"
          :key="index"
          :xs="item.grid.xs" :sm="item.grid.sm" :md="item.grid.md" :lg="item.grid.lg" :xl="item.grid.xl">
          <div class="inputItem">
            <el-form-item :prop="item.prop" :label="item.label">
              <el-input
                v-if="item.type === 'text' || item.type === 'textarea' || item.type === 'password' || item.type === 'number'"
                v-model="initialValue[item.prop]"
                :show-password="item.type === 'password'"
                :maxlength="item.maxlength || 100000"
                :type="item.type"
                :disabled="item.disabled"
                :clearable="true"
                :placeholder="item.placeholder"
                @keyup.enter.native="item.event"
                class="hundredPercent">
              </el-input>
              <el-select
                v-else-if="item.type === 'select' || item.type === 'multipleSelect'"
                v-model="initialValue[item.prop]"
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
                v-model="initialValue[item.prop]"
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
                v-else-if="item.type === 'datePicker'"
                v-model="initialValue[item.prop]"
                :type="item.type"
                :disabled="item.disabled"
                :clearable="true"
                :placeholder="item.label"
                @change="item.event"
                value-format="yyyy-MM-dd"
                class="hundredPercent">
              </el-date-picker>
              <el-radio-group v-else-if="item.type === 'radioGroup'" v-model="initialValue[item.prop]" @change="item.event">
                <el-radio v-for="(optItem, itemIndex) in item.optList" :key="itemIndex" :label="optItem.label">
                  {{optItem.value}}
                </el-radio>
              </el-radio-group>
              <slot v-else :name="item.prop" :data="item"></slot>
            </el-form-item>
          </div>
        </el-col>
      </template>
      <slot name="formCol"></slot>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: "form-add-update",
  props: {
    formConfig: {
      // 存储着form表单的各个项
      type: Object,
      required: true
    },
    initialValue: {
      // form的初始值
      type: Object,
      request: true
    },
    labelPosition: {
      // label的位置
      type: String,
      default: 'top'
    },
    rules: {
      // form的验证规则
      type: Object,
    },
    labelWidth: {
      // label的宽度
      type: String,
      default: '100px'
    }
  },
  methods: {
    removeRules () {
      this.$refs.formRef.resetFields()
    },
    setDefaultValue() {
      const formData = { ...this.initialValue };
      // 设置默认值
      this.formConfig.formItemList.forEach(({ key, value }) => {
        if (formData[key] === undefined || formData[key] === null) {
          formData[key] = value;
        }
      });
      this.$emit("input", formData);
    }
  },
  mounted () {
    console.log('挂载完成form');
    this.setDefaultValue();
  }
}
</script>

<style scoped>

</style>
