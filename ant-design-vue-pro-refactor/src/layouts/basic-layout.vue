<template>
  <!-- 容器主体：Layout布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中 -->
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <!-- 侧边：collapsible可伸缩 -->
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">
        <img src="@/assets/logo.png" style="width: 30px; height: 30px" />
      </div>
      <!-- 菜单 -->
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
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

    <!-- 路由占位符: 用于加载子页面 -->
    <router-view />
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

export default defineComponent({
  // 注册组件(提供使用)
  components: {
    PieChartOutlined,
    UserOutlined,
    TeamOutlined,
  },

  data() {
    // data()中放置页面上@click的方法
    const overViewClick = () => {
      this.$router.push("/");
    };
    const analysisClick = () => {
      this.$router.push("/analysis");
    };
    const basicFormClick = () => {
      this.$router.push("/form/basicForm");
    };
    const stepFormClick = () => {
      this.$router.push("/form/stepForm");
    };

    return {
      collapsed: ref(false),
      selectedKeys: ref(["1"]),
      overViewClick,
      analysisClick,
      basicFormClick,
      stepFormClick,
    };
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
