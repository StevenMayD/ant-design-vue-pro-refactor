import { createApp } from "vue";
import App from "./App.vue";
import Authorized from "./components/Authorized"; // 组件式权限控制(自定义的组件)
import AuthCheckDirective from "./directives/authDirective"; // 指令式权限控制(自定义的指令)

// 全局引入router后 子页面可以直接通过this.$router使用
import router from "./router";
// 仓库store，基本上就是一个容器，它包含一个属性state（应用中大部分的状态，可用于保存页面间传递的数据)
import store from "./store";
// 做国际化
import { createI18n } from "vue-i18n"; // 引入针对自定义封装的组件：npm install --save vue-i18n
import en_US from "./locale/enUS"; // 导入本地国际化语言包(中文)
import zh_CN from "./locale/zhCN"; // 导入本地国际化语言包(英文)
import queryString from "query-string"; // 解析url的第三方库

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
  Drawer, // 抽屉
  ConfigProvider,
  Dropdown, // 下拉框
  DatePicker, // 日期选择器
} from "ant-design-vue";

// const messages = {
//   zhCN: {
//     "overview.dateLabel": "时间：",
//   },
//   enUS: {
//     "overview.dateLabel": "Time：",
//   },
// };

// vue-i18n的两个配置属性：locale、messages
const i18n = new createI18n({
  // 从url中取locale参数 需要用到一个三方库解析url
  locale: queryString.parse(location.search).locale || "zhCN", // 添加默认值
  // 配置语言包（注意是messages 不是message）
  // 方式一：使用封装的独立文件
  messages: {
    zhCN: zh_CN, // messages信息 使用对应本地zhCN.js文件
    enUS: en_US,
  },
  // 方式二：使用变量
  // messages,
});

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
  .use(Drawer)
  .use(ConfigProvider)
  .use(Dropdown)
  .use(DatePicker)
  .use(i18n) // 传入i18n实例
  .component("Authorized", Authorized) // 自定义组件的注册写法
  .use(AuthCheckDirective) // 自定义指令的注册写法
  .mount("#app");
