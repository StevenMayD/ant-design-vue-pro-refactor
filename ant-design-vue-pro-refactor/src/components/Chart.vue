<template>
  <!-- 元素绑定ref -->
  <div ref="chartDom"></div>
</template>

<script>
import * as echarts from "echarts"; // 这样会将echarts包全部引入 比较大

export default {
  props: {
    // 接收外界传参属性option（用于加载图表数据）
    option: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    // 监听传参option的变化，用于更新图表（没有监听变化的话，刷新页面无法呈现图表）
    option(val) {
      this.myChart.setOption(val);
    },
  },
  mounted() {
    // 页面渲染完成后调用方法渲染图表
    this.renderChart();
  },
  // 方法列表
  methods: {
    renderChart() {
      /*
   知识点：ref 
    在JavaScript中需要通过document.querySelector("#demo"), document.getElementById('main') 来获取dom节点，然后再获取这个节点的值。
    在Vue中，我们不用获取dom节点，元素绑定ref之后，直接通过this.$refs即可调用，这样可以减少获取dom节点的消耗。vue中直接使用ref，不用任何引入或npm操作
    ref被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs对象上。
    如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向该子组件实例
   */
      this.myChart = echarts.init(this.$refs.chartDom); // 基于准备好的dom，初始化echarts实例（将dom元素与图表绑定）
      this.myChart.setOption(this.option); // 绘制图表（利用option数据加载图表数据）
    },
  },
};
</script>
