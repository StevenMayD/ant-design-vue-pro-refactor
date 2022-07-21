<template>
  <!-- 主体中的小主体 -->
  <a-layout>
    <!-- 内容部分 -->
    <a-layout-content style="margin: 20px 16px">
      <!-- 显示做了国际化的label：通过$t() 来使用i18n -->
      <p>
        {{ $t("overview.dateLabel") }}
        <a-date-picker></a-date-picker>
      </p>
      <div :style="{ padding: '24px', background: '#fff', minHeight: '400px' }">
        <p>总览页</p>
        <!-- 图表组件传参图表数据 -->
        <Chart :option="chartOption" style="height: 350px; width: 90%"></Chart>
        <!-- 高亮指令highlightjs，前提安装highlightjs：npm install --save highlight.js -->
        <highlightjs :code="chartCode" />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
// 子页面中引入自定义的图表组件
import Chart from "../../../components/Chart";
// 接口请求
import Request from "../../../utils/request";
// 使用raw-loader内联静态资源：用于构建可交互的组件文档，展示代码示例
import chartCode from "!!raw-loader!./../../../components/Chart"; // 拿到chart文件的导出字符串 (前提安装raw-loader：npm install raw-loader --save-dev)
/* vue3中使用highlightjs代码高亮器：
  npm install --save highlight.js   
  npm install --save @highlightjs/vue-plugin
*/
import hljsVuePlugin from "@highlightjs/vue-plugin"; // 高亮组件
import "highlight.js/styles/github.css"; // 高亮组件样式（github代码风格）
import "highlight.js/lib/common";

export default {
  data() {
    return {
      // 声明变量
      chartOption: {},
      chartCode,
    };
  },
  mounted() {
    // 页面完成渲染调用方法
    this.getChartData();
    // 数据轮询：每隔2秒 重新渲染图表数据
    this.interval = setInterval(() => {
      this.getChartData();
    }, 2000);
  },
  // 方法列表
  methods: {
    // 赋值变量
    getChartData() {
      Request({
        url: "/api/overview/chart",
        method: "get",
        params: { ID: 12345 },
      }).then((response) => {
        this.chartOption = {
          title: {
            text: "ECharts 入门示例",
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "牛仔裤", "高跟鞋", "袜子"], // 图表横坐标 名称
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: response.data, // 来自请求数据
            },
          ],
        };
      });
    },
  },
  // 子页面中注册组件
  components: {
    Chart,
    /* 页面上单独引入插件，不要直接在main.ts全局引入，注意：因为插件不支持响应式数据，所以不要使用ref定义响应式变量 */
    highlightjs: hljsVuePlugin.component,
  },
};
</script>

<style></style>
