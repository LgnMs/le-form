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

![image](https://note.youdao.com/favicon.ico)
