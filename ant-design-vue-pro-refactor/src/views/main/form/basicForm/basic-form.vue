<template>
  <div>
    <a-form
      :layout="formState.layout"
      :model="formState"
      v-bind="formItemLayout"
    >
      <a-form-item label="表单布局">
        <a-radio-group v-model:value="formState.layout">
          <a-radio-button value="horizontal">水平</a-radio-button>
          <a-radio-button value="vertical">垂直</a-radio-button>
          <a-radio-button value="inline">内联</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="账号">
        <a-input v-model:value="formState.fieldA" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item label="密码">
        <a-input v-model:value="formState.fieldB" placeholder="请输入密码" />
      </a-form-item>
      <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button type="primary">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
// antd复制来的代码，页面使用到了form、input、button、Radio，需要在main里全局注册
import { computed, defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const formState = reactive({
      layout: "horizontal",
      fieldA: "",
      fieldB: "",
    });
    const formItemLayout = computed(() => {
      const { layout } = formState;
      return layout === "horizontal"
        ? {
            labelCol: {
              span: 4,
            },
            wrapperCol: {
              span: 14,
            },
          }
        : {};
    });
    const buttonItemLayout = computed(() => {
      const { layout } = formState;
      return layout === "horizontal"
        ? {
            wrapperCol: {
              span: 14,
              offset: 4,
            },
          }
        : {};
    });
    return {
      formState,
      formItemLayout,
      buttonItemLayout,
    };
  },
});
</script>
