/*  自定义指令
  指令是带有v-前缀的特殊特性，使用更简便，无需嵌套使用，使用前需要去main注册
  但权限指令有个弊端：权限指令是首次加载后就决定了页面removeChild移除了页面标签，当用户角色和权限变化后，页面无从改变 
*/
// import { createApp } from "vue";
import { check } from "../utils/auth";

// 指定式权限控制（权限控制的自定义指令）
/*
  在vue2中，全局自定义指令通过 directive 挂载到 Vue 对象上，使用 Vue.directive('name',opt)
  在 vue3 中，vue 实例通过createApp 创建，所以全局自定义指令的挂载方式也改变了， directive 被挂载到 app上

  created：在绑定元素的 attribute 或事件监听器被应用之前调用；
  beforeMount：当指令第一次绑定到元素并且在挂载父组件之前调用；
  mounted：在绑定元素的父组件被挂载后调用；
  beforeUpdate：在更新包含组件的 VNode 之前调用；
  updated：在包含组件的 VNode 及其子组件的 VNode 更新后调用；
  beforeUnmount：在卸载绑定元素的父组件之前调用；
  unmounted：当指令与元素解除绑定且父组件已卸载时，只调用一次；
  */

// Vue3指令封装
const install = function (app) {
  app.directive("authCheck", {
    mounted(el, binding) {
      console.log("=dsw=element", el);
      if (!check(binding.value)) {
        console.log("=dsw=binding.vale指令传参值", binding.value);
        // 如果校验不通过，直接将元素从dom上移除
        // el.parentNode && el.parentNode.removeChild(el);
        if (el.parentNode) {
          console.log("=dsw=element.parentNode", el.parentNode);
          el.parentNode.removeChild(el);
        }
      } else {
        console.log("=dsw=角色拥有权限");
      }
    },
  });
};

// Vue2指令封装
// 将指定写成可以自己去注册和引用的指令
// function install(Vue, options = {}) {
//   // 创建指令：指令名称来自外界option.name（如果不存在，就使用auth）
//   Vue.directive(options.name || "auth", {
//     // inserted函数表示当绑定了该指令的元素 被插入到dom时候 会自动触发
//     inserted(el, binding) {
//       if (!check(binding.value)) {
//         // 如果校验不通过，直接将元素从dom上移除
//         el.parentNode && el.parentNode.removeChild(el);
//       }
//     },
//   });
// }

export default install;
