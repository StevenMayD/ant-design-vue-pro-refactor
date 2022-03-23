<script>
import { check } from "../utils/auth";

// 权限组件
export default {
  name: "Authorized",
  functional: true,
  // 接收外界传值
  props: {
    // 登录角色权限
    authority: {
      type: Array,
      required: true, // 要求外界必须传入（注意不是require）
    },
  },

  /*
    render---- Vue的js的渲染方式
  */
  // vue3的render()写法
  render() {
    // 如果校验通过，则返回插槽(就是传递过来的子组件)，否则返回null(注意这里不是 defaults)
    return check(this.authority) ? this.$slots.default() : null;
  },
  // // vue3的render()写法
  // render(h, context) {
  //   const { props, scopedSlots } = context;
  //   return check(props.authority) ? scopedSlots.default() : null;
  // },
};
</script>
