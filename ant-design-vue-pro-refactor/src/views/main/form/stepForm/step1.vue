<template>
  <div>
    <a-form :layout="formState.layout" :model="formState">
      <a-form-item label="付款账号">
        <a-input
          v-model:value="formState.fieldA"
          placeholder="请输入付款账号"
        />
      </a-form-item>
      <a-form-item label="收款账号">
        <a-input
          v-model:value="formState.fieldB"
          placeholder="请输入收款账号"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="nextStep">下一步</a-button>
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
      fieldA: "",
      fieldB: "",
    });
    return {
      formState,
    };
  },
  methods: {
    nextStep() {
      this.$router.push("/form/stepForm/confirm");
    },
  },
});
</script>