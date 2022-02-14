<template>
  <!-- 主体中的小主体 -->
  <a-layout>
    <!-- 顶部部分 -->
    <a-layout-header style="background: #fff; padding: 0" />
    <!-- 内容部分 -->
    <a-layout-content style="margin: 0 16px">
      <!-- 面包屑组件 -->
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>表单</a-breadcrumb-item>
        <a-breadcrumb-item>子表单</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
        <!-- 路由占位符: 用于加载子表单页面 -->
        <router-view />
      </div>
    </a-layout-content>
    <!-- 底部部分 -->
    <a-layout-footer style="text-align: center">
      Ant Design ©2022 Created by 董帅文
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {};
</script>

<style></style>
