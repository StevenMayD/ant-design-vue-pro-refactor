import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入antdesign样式
import "ant-design-vue/dist/antd.css";
// 引入antdesign组件
import { Layout, Menu, SubMenu, Breadcrumb } from "ant-design-vue";

// vue3.0 注册组件
createApp(App)
  .use(store)
  .use(router)
  .use(Layout)
  .use(Menu)
  .use(SubMenu)
  .use(Breadcrumb)
  .mount("#app");
