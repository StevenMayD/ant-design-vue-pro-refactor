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
      <div :style="{ padding: '24px', background: '#fff', minHeight: '500px' }">
        <p>总览页</p>
        <!-- 图表组件传参图表数据 -->
        <Chart :option="chartOption" style="height: 400px; width: 90%"></Chart>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
// 子页面中引入自定义的图表组件
import Chart from "../../../components/Chart";
import Request from "../../../utils/request";

export default {
  data() {
    return {
      // 声明变量
      chartOption: {},
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
  },
};
</script>

<style></style>
