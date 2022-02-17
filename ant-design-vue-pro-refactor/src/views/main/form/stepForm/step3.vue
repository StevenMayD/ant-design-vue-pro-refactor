<template>
  <div>
    <p>操作成功，预计两小时到账</p>
    <a-button type="primary" @click="confirm">确定</a-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    confirm() {
      this.$router.push("/form/stepForm/info");
    },
  },
});
</script>
