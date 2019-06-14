<template>
  <div class="FormItem" :style="{display, width, height: heightCup}" >
    <label v-if="label" class="FormItem-lable" :style="{width: labelWidthCup}">
      <div class="left-border" v-if="isPrinting"></div>
      <span class="require" v-if="required">*</span>
      <span class="FormItem-lable__text">
        {{label}}
      </span>
    </label>
    <div class="FormItem-content" :class="{noLabel: !label, 'align-top': alignTop, noPadding}"
      :style="formContentStyle">
      <el-form-item :prop="prop" ref="elFormItem" style="display: inline-block; width: 100%;">
        <el-tooltip effect="light"
          :content="validateMsgsProp.validateMessage"
          placement="top-start"
          popper-class="FormItem-tooltip"
          :value="!validateMsgsProp.msgStatus"
          :enterable="false"
          :manual="true">
          <slot></slot>
        </el-tooltip>
      </el-form-item>
    </div>
  </div>
</template>

<script>
import formSubject from './formSubject';

export default {
  props: {
    label: String, // label文本
    inline: Boolean, // 是否级联显示
    span: [Number, String], // 所占24列中的多少分
    prop: String, // 绑定表单中的属性，用于表单验证
    height: [String, Number], // 表单项的高度
    alignTop: Boolean, // 内容区是否从顶部开始布局，默认垂直居中
    noPadding: Boolean, // 是否有内边距
    isPrinting: Boolean, // 打印中
  },
  inject: ['labelWidth', 'rules'], // 注入父组件提供的值
  computed: {
    formContentStyle() {
      const { labelWidthCup } = this;
      let str = `width: calc(100% - ${labelWidthCup} - 18px - 24px)`;
      if (this.noPadding) {
        str = `width: calc(100% - ${labelWidthCup} - 18px); height: 100%;`;
      }
      return str;
    },
    required() {
      const ruleData = this.rules[this.prop];
      let rq = false;
      if (!ruleData) {
        return rq;
      }
      ruleData.forEach((item) => {
        if (item.required) {
          rq = true;
        }
      });
      return rq;
    },
    labelWidthCup() {
      const val = this.labelWidth;
      if (!this.label) {
        return '-18px';
      }
      if (typeof val === 'number') {
        return `${val}px`;
      }
      if (typeof val === 'string') {
        if (val.indexOf('px') > -1) {
          return val;
        }
        return `${val}px`;
      }
      return '80px';
    },
    display() {
      if (this.inline) {
        return 'inline-block';
      }
      return 'block';
    },
    width() {
      if (this.span) {
        return `calc(100% * (${this.span} / 24))`;
      }
      return '100%';
    },
    heightCup() {
      const val = this.height;
      if (typeof val === 'number') {
        return `${val}px`;
      }
      if (typeof val === 'string') {
        if (val.indexOf('px') > -1) {
          return val;
        }
        return `${val}px`;
      }
      return '';
    },
  },
  data() {
    return {
      validateMsgsProp: {
        msgStatus: true,
        validateMessage: '',
      },
    };
  },
  created() {
    formSubject.subscribe((x) => {
      if (x.prop === 'all') {
        this.validateMsgsProp.msgStatus = x.msgStatus;
      } else if (x.prop === this.prop) {
        if (x.validateMessage) {
          this.validateMsgsProp.validateMessage = x.validateMessage;
        }
        this.validateMsgsProp.msgStatus = x.msgStatus;
      }
    });
  },
};
</script>


<style lang="scss">
$border-color: #e9e9e9;
$lable-bgcolor: #FAFAFA;
.FormItem {
  font-size: 12px;
  position: relative;
  border-top: 1px solid $border-color;
  vertical-align: top;
  height: 48px;
  overflow: hidden;
  .left-border {
    position: absolute;
    height: 100%;
    width: 1px;
    left: 0;
    top: 0;
    background-color: $border-color;
    z-index: 999;
  }
  &-lable {
    display: inline-block;
    padding: 8px;
    height: calc(100% - 16px);
    background-color: $lable-bgcolor;
    border-right: 1px solid $border-color;
    border-left: 1px solid $border-color;
    text-align: center;
    .require {
      display: inline-block;
      width: 8px;
      color: #F56C6C;
      vertical-align: -3px;
    }
    &__text {
      display: inline-block;
      vertical-align: middle;
      line-height: 1.3em;
      width: 80%;
    }
    &::after {
      content: '';
      display: inline-block;
      vertical-align: middle;
      height: 100%;
    }
  }
  &-content {
    display: inline-block;
    vertical-align: top;
    padding: 8px 12px;
    height: calc(100% - 16px);
    &.noLabel {
      border-left: 1px solid $border-color;
    }
    &::after {
      content: '';
      display: inline-block;
      vertical-align: middle;
      height: 100%;
    }
    &.align-top {
      &::after {
        content: '';
        vertical-align: top;
      }
    }
    &.noPadding {
      padding: 0;
    }
  }
  .el-table th {
    background-color: $lable-bgcolor;
  }
  .el-radio {
    margin-right: 15px;
  }
  .el-radio__label {
    font-size: 12px;
  }
  .el-input--small .el-input__inner {
    font-size: 12px;
  }
  .el-checkbox {
    font-size: 12px;
  }
  .el-checkbox__label {
    font-size: 12px;
    vertical-align: -2px;
  }
  .el-select {
    width: 100%;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
  }
  .el-form-item.is-success .el-input__inner,
  .el-form-item.is-success .el-input__inner:focus,
  .el-form-item.is-success .el-textarea__inner,
  .el-form-item.is-success .el-textarea__inner:focus {
    border-color: #DCDFE6;
  }
  .el-textarea__inner {
    height: 88px;
  }
}
.FormItem-tooltip {
  &.el-tooltip__popper.is-light {
    border: 1px solid #F56C6C;
    color: #F56C6C;
  }
  &.el-tooltip__popper.is-light[x-placement^="top"] .popper__arrow {
    border-top-color: #F56C6C;
  }
}
</style>
