<template>
  <div>
    <a-form :layout="formState.layout" :model="formState">
      <a-form-item label="付款账号">
        <span>999</span>
      </a-form-item>
      <a-form-item>
        <a-row>
          <a-col :span="2"
            ><a-button type="primary" @click="preStep">上一步</a-button></a-col
          >
          <a-col :span="1">
            <a-button type="primary" @click="commit">下一步</a-button></a-col
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
