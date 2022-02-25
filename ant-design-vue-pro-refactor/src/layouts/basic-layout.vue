<template>
  <!-- 容器主体：Layout布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中 -->
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <!-- 侧边：collapsible可伸缩 -->
    <a-layout-sider
      v-model:collapsed="collapsedValue"
      collapsible
      :theme="navStyle"
    >
      <!-- 利用theme属性和navStyle变量 动态设置主题色 -->
      <div class="logo">
        <img src="@/assets/logo.png" style="width: 30px; height: 30px" />
      </div>
      <!-- 菜单 -->
      <a-menu
        v-model:selectedKeys="selectedKeys"
        :theme="navStyle"
        mode="inline"
      >
        <!-- 菜单项 -->
        <a-menu-item key="1" @click="overViewClick">
          <pie-chart-outlined /><span>总览</span>
        </a-menu-item>
        <!-- 含子菜单的菜单项 -->
        <a-sub-menu key="sub1">
          <template #title>
            <span> <user-outlined /><span>仪表盘</span> </span>
          </template>
          <a-menu-item key="2" @click="analysisClick">分析页</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span><team-outlined /><span>表单</span> </span>
          </template>
          <a-menu-item key="3" @click="basicFormClick">基础表单</a-menu-item>
          <a-menu-item key="4" @click="stepFormClick">分布表单</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <!-- 侧边抽屉 -->
    <SettingDrawer />

    <a-layout>
      <!-- 顶部部分（子页面公共部分） -->
      <a-layout-header style="background: #fff; padding: 0" />
      <!-- 路由占位符: 用于加载子页面 -->
      <router-view />
      <!-- 底部部分（子页面公共部分）-->
      <a-layout-footer style="text-align: center">
        Ant Design ©2022 Created by 董帅文
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
// 引入组件
import {
  PieChartOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
// 命名为index.vue可以../components/SettingDrawer 否则需要引入详细地址
import SettingDrawer from "../components/SettingDrawer/settingDrawer";

export default defineComponent({
  // 注册组件(提供使用)
  components: {
    PieChartOutlined,
    UserOutlined,
    TeamOutlined,
    SettingDrawer, // 组件不是路由 需要注册组件
  },
  // computed定义响应式数据 会根据路由参数变化而变化
  computed: {
    // 控制主题色
    navStyle() {
      return this.$route.query.navStyle || "dark";
    },
  },
  // // data()中放置初始化变量, 也可放置页面上@click的方法
  data() {
    // const overViewClick = () => {
    //   this.$router.push("/");
    // };
    // const analysisClick = () => {
    //   this.$router.push("/analysis");
    // };
    // const basicFormClick = () => {
    //   this.$router.push("/form/basicForm");
    // };
    // const stepFormClick = () => {
    //   this.$router.push("/form/stepForm");
    // };
    return {
      collapsedValue: ref(false),
      selectedKeys: ref(["1"]),
      // overViewClick,
      // analysisClick,
      // basicFormClick,
      // stepFormClick,
    };
  },
  // 放置页面@click方法或自定义方法
  methods: {
    overViewClick() {
      this.$router.push("/");
    },
    analysisClick() {
      this.$router.push("/analysis");
    },
    basicFormClick() {
      this.$router.push("/form/basicForm");
    },
    stepFormClick() {
      this.$router.push("/form/stepForm/info");
    },
  },
});
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
  text-align: center;
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
