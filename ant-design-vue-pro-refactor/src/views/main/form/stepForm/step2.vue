<template>
  <div>
    <a-form :layout="formState.layout" :model="formState">
      <a-form-item label="付款账号">
        <span>{{ payAcc }}</span>
      </a-form-item>
      <a-form-item label="收款账号">
        <span>{{ formState.recAcc }}</span>
      </a-form-item>
      <a-form-item label="业务员">
        <span>{{ salesman }}</span>
      </a-form-item>
      <a-form-item>
        <a-row>
          <a-col :span="2"
            ><a-button type="primary" @click="preStep">上一步</a-button></a-col
          >
          <a-col :span="2">
            <a-button type="primary" @click="commit">提交</a-button></a-col
          >
          <a-col :span="2">
            <a-button type="primary" @click="testChange"
              >测试数据变动</a-button
            ></a-col
          >
        </a-row>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

/*
  三种数据加载和路由跳转的写法
*/
export default defineComponent({
  /*  写法一：setup()中定义变量和方法（可进行路由跳转）
     由于vue3中setup里面不能使用this，setup的任何回调方法都无法以this.$router和$this.store来获取路由和状态
     不过两个官方示例都写了在setup中引入的方法 useRouter()和useStore()
  */
  setup() {
    const router = useRouter();
    const store = useStore();

    const formState = reactive({
      layout: "horizontal",
      recAcc: store.state.recAccount,
    });
    const preStep = () => {
      router.back();
    };
    return {
      formState,
      preStep,
    };
  },
  /* 写法二： data() 中定义变量，methods中定义方法（可以进行路由跳转）
    data()中初始化变量，但变量不可变动
   */
  data() {
    const { $store } = this;
    return {
      payAcc: $store.state.payAccount,
    };
  },
  /* 写法三： computed 中定义变量，methods中定义方法（可以进行路由跳转）
    computed中定义的变量，可以随数据变动
   */
  computed: {
    // data中没有直接声明出要计算的变量payAcc，也可以直接在computed中写入，并给页面使用
    salesman() {
      // 获取$store.state保存的账户数据
      const { $store } = this;
      return $store.state.salesman;
    },
  },
  methods: {
    commit() {
      this.$router.push("/form/stepForm/result");
    },
    testChange() {
      /* 
      由于computed定义的是响应式变量，但data()只是初始化定义变量
      salesman变量会变化，payAccount不会变
      */
      this.$store.state.payAccount = "10086";
      this.$store.state.salesman = "特朗普";
    },
  },
});
</script>
