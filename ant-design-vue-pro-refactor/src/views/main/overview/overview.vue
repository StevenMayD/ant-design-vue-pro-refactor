<template>
  <!-- 主体中的小主体 -->
  <a-layout>
    <!-- 内容部分 -->
    <a-layout-content style="margin: 20px 16px">
      <!-- 显示做了国际化的label：通过$t() 来使用i18n -->
      <p>{{ $t("overview.dateLabel") }}</p>
      <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
        总览页
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script></script>

<style></style>
