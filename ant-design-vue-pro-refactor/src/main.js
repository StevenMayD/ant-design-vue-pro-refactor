import { createApp } from "vue";
import App from "./App.vue";

// 全局引入router后 子页面可以直接通过this.$router使用
import router from "./router";
import store from "./store";

// 引入antdesign样式集
import "ant-design-vue/dist/antd.css";
// 引入antdesign组件
import {
  Layout, // 布局
  Menu, // 菜单
  SubMenu, // 子菜单
  Breadcrumb, // 面包屑
  Input, // 输入文本框
  Button, // 按钮
  Form, // 表单
  FormItem, // 表单项
  Radio, // 单选项目组
  Row, // 栅格
  Col, // 栅格列
} from "ant-design-vue";

// vue3.0 注册组件
createApp(App)
  .use(store)
  .use(router)
  .use(Layout)
  .use(Menu)
  .use(SubMenu)
  .use(Breadcrumb)
  .use(Input)
  .use(Button)
  .use(Form)
  .use(FormItem)
  .use(Radio)
  .use(Row)
  .use(Col)
  .mount("#app");
