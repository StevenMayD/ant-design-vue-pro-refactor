<template>
  <div>
    <a-form
      ref="formRef"
      name="custom-validation"
      :model="formState"
      :rules="rules"
      v-bind="layout"
    >
      <a-form-item has-feedback label="付款账号" name="payAccount">
        <a-input
          v-model:value="formState.payAccount"
          placeholder="请输入付款账号"
          type="password"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item has-feedback label="收款账号" name="recAccount">
        <a-input
          v-model:value="formState.recAccount"
          placeholder="请输入收款账号"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item has-feedback label="业务员" name="salesman">
        <a-input
          v-model:value="formState.salesman"
          placeholder="请输入业务员姓名"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="nextStep">下一步</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup() {
    const formRef = ref();
    const formState = reactive({
      payAccount: "",
      recAccount: "",
      salesman: "",
    });
    // 表单布局
    const layout = {
      // label所占的百分比
      labelCol: {
        span: 4,
      },
      // label后面的内容所占的百分比
      wrapperCol: {
        span: 14,
      },
    };
    // 表单校验规则
    const rules = {
      // 要求a-form-item中有标识 name="payAccount"
      payAccount: [
        {
          required: true, // 必填校验
          message: "请输入付款账号",
          trigger: "change", // 触发方式：内容产生变化
        },
        {
          max: 5, // 最大位数校验
          message: "付款账号不超过5个字符",
          trigger: "change",
        },
      ],
      recAccount: [
        {
          required: true,
          message: "请输入收款账号",
          trigger: "change",
        },
        {
          type: "number", // 类型校验
          message: "收款账号必须是数字",
          trigger: "change",
        },
      ],
      salesman: [
        {
          required: true,
          message: "请输入业务员",
          trigger: "change",
        },
      ],
    };
    return {
      formState,
      formRef,
      rules,
      layout,
    };
  },
  methods: {
    nextStep() {
      // 将router, store从this中取出
      const { $router, $store } = this;
      // store仓库的state属性，用于存储数据(像NSUserDefault那样)
      $store.state.payAccount = this.formState.payAccount;
      $store.state.recAccount = this.formState.recAccount;
      $store.state.salesman = this.formState.salesman;
      $router.push("/form/stepForm/confirm");
    },
  },
});
</script>
