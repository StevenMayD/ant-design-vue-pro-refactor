<template>
  <div id="app">
    <!-- 使用国际化组件 将所有页面内容包裹，参数传递locale属性 -->
    <a-locale-provider :locale="locale">
      <!-- 路由占位符：用于加载主体页面 -->
      <router-view />
    </a-locale-provider>
  </div>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN"; // 导入ant-design-vue的国际化库
import enUS from "ant-design-vue/lib/locale-provider/en_US";

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
    },
  },
};
</script>

<style></style>
