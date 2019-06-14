<template>
  <el-form
    class="FormContainer"
    ref="Form"
    :model="model"
    :rules="rules"
    @validate="validate2"
    @submit.native.prevent="onSubmit"
  >
    <slot></slot>
  </el-form>
</template>

<script>
import formSubject from './formSubject';

export default {
  props: {
    labelWidth: [Number, String],
    model: Object,
    rules: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  provide() {
    return {
      labelWidth: this.labelWidth,
      rules: this.rules,
    };
  },
  data() {
    return {
      validateMsgs: {},
    };
  },
  methods: {
    onSubmit() {
      return false;
    },
    validate(fn) {
      this.$refs.Form.validate(fn);
    },
    resetFields() {
      this.$refs.Form.resetFields();
      formSubject.next({ prop: 'all', msgStatus: true, validateMessage: '' });
    },
    validate2(prop, msgStatus, validateMessage) {
      formSubject.next({ prop, msgStatus, validateMessage });
    },
  },
};
</script>


<style lang="scss">
$border-color: #ddd;
.FormContainer {
  font-size: 0;
  // border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  border-right: 1px solid $border-color;
  .el-form-item--small.el-form-item {
    margin-bottom: 0;
  }
  .el-form-item--small .el-form-item__content {
    line-height: inherit;
    font-size: inherit;
  }
  .el-form-item__error {
    display: none;
  }
}
</style>
