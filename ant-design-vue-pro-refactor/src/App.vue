<template>
  <div id="app">
    <!-- 国际化1：ConfigProvider、多数组件的国际化（使用国际化组件 将所有页面内容包裹，参数传递locale属性） -->
    <a-config-provider :locale="locale">
      <!-- 路由占位符：用于加载主体页面 -->
      <router-view />
    </a-config-provider>
  </div>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN"; // ConfigProvider组件库的使用（针对vue组件的国际化）：导入ant-design-vue的中文国际化库
import enUS from "ant-design-vue/lib/locale-provider/en_US"; // ConfigProvider组件库的使用（针对vue组件的国际化）：导入ant-design-vue的英文国际化库

import moment from "moment"; // 引入moment语言包：针对vue时间类组件的国际化

export default {
  data() {
    return {
      locale: zhCN, // 属性locale，初始化为zhCN
    };
  },
  watch: {
    // 监听路由上的query上的locale参数，并赋值给locale变量
    "$route.query.locale": function (val) {
      this.locale = val === "enUS" ? enUS : zhCN;
      moment.locale(val === "enUS" ? "en" : "zh-cn"); // 国际化2：moment、针对ant-design-vue组件中的时间类型组件<a-date-picker>的国际化
    },
  },
};
</script>

<style></style>
