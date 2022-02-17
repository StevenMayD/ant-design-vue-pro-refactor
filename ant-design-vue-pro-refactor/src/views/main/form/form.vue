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
        <a-breadcrumb-item>{{ subForm }}</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
        <p>{{ subFormName }}</p>
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
export default {
  /* 方法的执行顺序
    data() -> created() -> mounted() 
    data()：最初的初始化方法，放置一些初始化的变量；
    created()： 在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图；
    mounted()：在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作；
  */
  data() {
    return {
      subForm: null,
    };
  },
  created() {
    this.subForm = "子页面";
  },
  mounted() {
    // 改变subForm变量
    this.subForm = this.getSubFormName();
  },

  /* 计算属性：当页面中有某些数据依赖其他数据进行变动的时候可以使用计算属性 
    就算在data中没有直接声明出要计算的变量，也可以直接在computed中写入
  */
  computed: {
    // 页面上的subFormName数据，依赖subForm的变动而变动
    subFormName: function () {
      return this.subForm + "-内容";
    },
  },

  /* 监听器：用来监听数据变化 从而做出反应
    watch用于观察和监听页面上的vue实例，当然在大部分情况下我们都会使用computed
    但如果要在数据变化的同时进行异步操作或者是比较大的开销，那么watch为最佳选择
  */
  watch: {
    // 监控路由变化
    "$route.path": function () {
      this.subForm = this.getSubFormName();
    },
  },

  /* 放置自定义方法
    通常在这里面写入方法，只要调用就会重新执行一次，相应的有一些触发条件
    在某些时候methods和computed看不出来具体的差别，但是一旦在运算量比较复杂的页面中，就会体现出不一样
  */
  methods: {
    // 获取子表单名称
    getSubFormName() {
      let routeArr = this.$route.path.split("/"); // 以'/'字符分隔路由字符串
      var formName = routeArr[2] || "子表单";
      if (formName === "basicForm") {
        formName = "基础表单";
      } else if (formName === "stepForm") {
        formName = "分布表单";
      }
      return formName;
    },
  },
};
</script>

<style></style>
