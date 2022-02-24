<template>
  <a-drawer
    v-model:visible="visible"
    class="custom-class"
    style="color: red"
    title="Basic Drawer"
    placement="right"
    @after-visible-change="afterVisibleChange"
  >
    <!-- 设置抽屉直接挂载到DOM上 通过handle控制抽屉的打开关闭 -->
    <template v-slot:handle>
      <div class="setting-drawer-handle" @click="visible = !visible">
        <!-- 组件的方式使用图标 ( <a-icon>的方式 使用出错 )-->
        <apple-outlined v-if="!visible" />
        <android-outlined v-if="visible" />
      </div>
    </template>

    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script>
import { defineComponent, ref } from "vue";
// 引入图标
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  // 注册组件(提供使用)
  components: {
    AppleOutlined,
    AndroidOutlined,
  },

  setup() {
    const visible = ref(false);

    const afterVisibleChange = (bool) => {
      console.log("visible", bool);
    };

    return {
      visible,
      afterVisibleChange,
    };
  },
});
</script>

<!-- 将scope样式 抽离到独立的index.less文件中 -->
<style lang="less" src="./index.less"></style>
