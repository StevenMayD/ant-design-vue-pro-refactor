<template>
  <!-- :closable 可以使用bool值 -->
  <a-drawer
    v-model:visible="visible"
    class="custom-class"
    title="设置"
    placement="right"
    @after-visible-change="afterVisibleChange"
    :closable="false"
  >
    <!-- 设置抽屉直接挂载到DOM上 通过handle控制抽屉的打开关闭 -->
    <template v-slot:handle>
      <div class="setting-drawer-handle" @click="visible = !visible">
        <!-- 组件的方式使用图标 ( <a-icon>的方式 使用出错 )-->
        <apple-outlined v-if="!visible" />
        <android-outlined v-if="visible" />
      </div>
    </template>

    <div>
      <h3>整体风格定制</h3>
      <a-radio-group
        v-model:value="navStyle"
        @change="(e) => navChange('navStyle', e.target.value)"
      >
        <a-radio value="dark">黑色</a-radio>
        <a-radio value="light">白色</a-radio>
      </a-radio-group>
    </div>
    <div>
      <h3>导航位置</h3>
      <a-radio-group
        v-model:value="navLayout"
        @change="(e) => navChange('navLayout', e.target.value)"
      >
        <a-radio value="left">左侧</a-radio>
        <a-radio value="top">顶部</a-radio>
      </a-radio-group>
    </div>
  </a-drawer>
</template>

<script>
import { defineComponent, ref } from "vue";
// 引入图标
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons-vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  // 注册组件(提供使用)
  components: {
    AppleOutlined,
    AndroidOutlined,
  },
  computed: {
    /* 同步路由上的navStyle参数到抽屉绑定变量navStyle
      这里使用绑定变量 就需要写在computed:里，不能写在setup里
      或者直接写在<a-radio-group>里 v-model:value="$route.query.navStyle || 'dark'"
    */
    navStyle() {
      return this.$route.query.navStyle || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    },
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const visible = ref(false);

    const afterVisibleChange = (bool) => {
      console.log("visible", bool);
    };
    // 选项变化时的回调函数
    const navChange = (type, value) => {
      // 路由上添加query包括：原先的query和当前type的query
      router.push({ query: { ...route.query, [type]: value } });
    };
    return {
      visible,
      afterVisibleChange,
      navChange,
    };
  },
});
</script>

<!-- 将scope样式 抽离到独立的index.less文件中 -->
<style lang="less" src="./index.less"></style>
