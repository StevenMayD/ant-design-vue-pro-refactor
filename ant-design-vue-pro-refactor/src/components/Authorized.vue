<script>
/*  自定义组件  */

import { check } from "../utils/auth";

/* vue的渲染方式有template 和 render()函数两种

  函数式组件里是没有this的，要怎样在template中使用check呢？ 
  且slot不能作为根元素标签，必须有父级标签，这样有会影响HTML结构
  这样使用template就很不方便了
  
  所以这里不使用template，直接使用render函数式组件写法
*/

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
    // 如果校验通过，则返回插槽对象(就是传递过来的子组件)，否则返回null(注意这里不是 defaults)
    return check(this.authority) ? this.$slots.default() : null;
  },
  // // vue3的render()写法
  // render(h, context) {
  //   const { props, scopedSlots } = context;
  //   return check(props.authority) ? scopedSlots.default() : null;
  // },
};
</script>
