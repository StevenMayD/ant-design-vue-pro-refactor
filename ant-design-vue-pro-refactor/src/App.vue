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
        <a-menu-item key="1">
          <pie-chart-outlined /><span>总览</span>
        </a-menu-item>
        <!-- 含子菜单的菜单项 -->
        <a-sub-menu key="sub1">
          <template #title>
            <span> <user-outlined /><span>仪表盘</span> </span>
          </template>
          <a-menu-item key="2">分析页</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span><team-outlined /><span>表单</span> </span>
          </template>
          <a-menu-item key="3">基础表单</a-menu-item>
          <a-menu-item key="4">分布表单</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <!-- 主体中的小主体 -->
    <a-layout>
      <!-- 顶部部分 -->
      <a-layout-header style="background: #fff; padding: 0" />
      <!-- 内容部分 -->
      <a-layout-content style="margin: 0 16px">
        <!-- 面包屑组件 -->
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>表单</a-breadcrumb-item>
          <a-breadcrumb-item>基础表单</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          基础表单属于表单
        </div>
      </a-layout-content>
      <!-- 底部部分 -->
      <a-layout-footer style="text-align: center">
        Ant Design ©2022 Created by 董帅文
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import {
  PieChartOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    PieChartOutlined,
    UserOutlined,
    TeamOutlined,
  },

  data() {
    return {
      collapsed: ref(false),
      selectedKeys: ref(["1"]),
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
