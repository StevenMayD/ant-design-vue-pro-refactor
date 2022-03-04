<template>
  <div>
    <a-form
      ref="formRef"
      name="custom-validation"
      :model="formState"
      :rules="rules"
      v-bind="layout"
    >
      <a-form-item
        has-feedback
        label="付款账号"
        name="payAccount"
        :validateStatus="formState.payAccountStatus"
        :help="formState.payAccountHelp"
      >
        <a-input
          v-model:value="formState.payAccount"
          placeholder="请输入付款账号"
          type="password"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item
        has-feedback
        label="收款账号"
        name="recAccount"
        :validateStatus="formState.recAccountStatus"
        :help="formState.recAccountHelp"
      >
        <a-input
          v-model:value="formState.recAccount"
          placeholder="请输入收款账号"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item
        has-feedback
        label="业务员"
        name="salesman"
        :validateStatus="formState.salesmanStatus"
        :help="formState.salesmanHelp"
      >
        <a-input
          v-model:value="formState.salesman"
          placeholder="请输入业务员姓名"
        />
      </a-form-item>
      <a-form-item>
        <a-row>
          <a-col :span="4">
            <a-button type="primary" @click="nextStep">下一步</a-button>
          </a-col>
          <a-col :span="1">
            <a-button type="primary" @click="reset">重置</a-button>
          </a-col>
        </a-row>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
// 封装校验代码到js独立文件
import { isNullCheck } from "../../../../utils/formCheck";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();

    const formRef = ref();
    const formState = reactive({
      payAccount: "",
      recAccount: "",
      salesman: "",
      payAccountStatus: "",
      payAccountHelp: "",
      recAccountStatus: "",
      recAccountHelp: "",
      salesmanStatus: "",
      salesmanHelp: "",
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
    // 表单动态校验规则
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
    const nextStep = () => {
      // 封装校验代码到js独立文件
      // 表单提交校验：通过双向绑定进行校验
      if (isNullCheck(formState.payAccount)) {
        // form表单组件自带校验提示
        formState.payAccountStatus = "error";
        formState.payAccountHelp = "请输入付款账号!";
      }
      if (isNullCheck(formState.recAccount)) {
        formState.recAccountStatus = "warning";
        formState.recAccountHelp = "请输入收款账号!";
      }
      if (isNullCheck(formState.salesman)) {
        formState.salesmanStatus = "success";
        formState.salesmanHelp = "请输入业务员!";
      } else {
        // message组件提示
        message.success("校验通过!");
        // store仓库的state属性，用于存储数据(像NSUserDefault那样)
        store.state.payAccount = formState.payAccount;
        store.state.recAccount = formState.recAccount;
        store.state.salesman = formState.salesman;
        router.push("/form/stepForm/confirm");
      }
    };
    const reset = () => {
      // 表单重置
      formRef.value.resetFields();
    };
    return {
      formState,
      formRef,
      rules,
      layout,
      nextStep,
      reset,
    };
  },
});
</script>
