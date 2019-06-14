# le-form

基于element-ui 的form表单实现的一个高拓展性的表格布局组件，能够用于日常使用表单的布局实现。

## 功能说明

- [x] 栅格化布局
- [x] 表单数据绑定
- [x] 表单验证

## 前置条件

需要先全局注册element-ui的el-form、el-form-item、el-tooltip三个组件

## 使用

```html
<form-container class="form"  ref="form" labelWidth="72" :model="model" :rules="rules">
  <form-item label="表单项1" prop="one">
    <el-input v-model="model.one" placeholder="请输入"></el-input>
  </form-item>
  <form-item label="表单项2" prop="two">
    <el-input v-model="model.two" placeholder="请输入"></el-input>
  </form-item>
  <form-item label="表单项3" prop="three">
    <el-input v-model="model.three" placeholder="请输入"></el-input>
  </form-item>
  <form-item label="表单项4" prop="four" inline span="12">
    <el-input v-model="model.four" placeholder="请输入"></el-input>
  </form-item>
  <form-item label="表单项5" prop="five" inline span="12">
    <el-input v-model="model.five" placeholder="请输入"></el-input>
  </form-item>
</form-container>
```

```javascript
// 配置element的展示
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

var app = new Vue({
  el: '#app',
  data() {
    return {
      model: {
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
      },
      rules: {
        one: [
          { required: true, message: '请填写', trigger: 'blur' },
        ],
      },
    };
  },
});
```

## 效果展示

![image](https://github.com/LgnMs/le-form/raw/master/public/images/1.jpg)

## 文档

### FormContainer （表单容器）

> model和rules的使用方法与element-ui的form组件一致

#### FormContainer Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
labelWidth | lable宽度 | number/string | —— | ——
model | 表单数据对象 | object | —— | ——
rules | 表单验证规则 | object | —— | ——

#### FormContainer Methods

方法名 | 说明 | 参数
---|---|---
validate | 对整个表单进行校验的方法，参数为一个回调函数 | Function(callback: Function(boolean, object))

### FormTitle （表单标题）

#### FormTitle Slot

name | 说明
---|---
—— | FormTitle内容

### FormItem (表单项)

#### FormItem Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
label | 标签文本 | string | —— | ——
inline | 是否级联显示 | boolean | —— | false
span | 所占24列中的多少份 | number/string | —— | 24
prop | 表单域 model 字段，在使用 validate方法的情况下，该属性是必填的 | string | 传入 Form 组件的 model 中的字段 | ——
height | formItem的高度 | number/string | —— | ——
alignTop | 内容区是否从顶部开始布局，默认垂直居中 | boolean | —— | false
noPadding | 是否有内边距 | boolean | - | false

#### FormItem Slot

name | 说明
---|---
—— | FormItem内容
