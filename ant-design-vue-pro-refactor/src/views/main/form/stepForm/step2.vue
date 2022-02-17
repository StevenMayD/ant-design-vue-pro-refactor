<template>
  <div>
    <a-form :layout="formState.layout" :model="formState">
      <a-form-item label="付款账号">
        <span>{{ payAcc }}</span>
      </a-form-item>
      <a-form-item>
        <a-row>
          <a-col :span="2"
            ><a-button type="primary" @click="preStep">上一步</a-button></a-col
          >
          <a-col :span="1">
            <a-button type="primary" @click="commit">提交</a-button></a-col
          >
        </a-row>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const formState = reactive({
      layout: "horizontal",
    });
    return {
      formState,
    };
  },
  computed: {
    // data中没有直接声明出要计算的变量payAcc，也可以直接在computed中写入，并给页面使用
    payAcc() {
      // 获取$store.state保存的账户数据
      const { $store } = this;
      return $store.state.payAccount;
    },
  },
  methods: {
    preStep() {
      this.$router.back();
    },
    commit() {
      this.$router.push("/form/stepForm/result");
    },
  },
});
</script>
