import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import BasicLayout from "../layouts/basic-layout.vue"; // 总布局路由页面
import Overview from "../views/main/overview/overview.vue"; // 总览路由页面
import Analysis from "../views/main/dashboard/analysis.vue"; // 仪表盘路由页面
import Form from "../views/main/form/form.vue"; // 表单路由页面
import BasicForm from "../views/main/form/basicForm/basic-form.vue"; // 基础表单
import StepForm from "../views/main/form/stepForm/step-form.vue"; // 分布表单
import Step1 from "../views/main/form/stepForm/step1.vue"; // 分布表单
import Step2 from "../views/main/form/stepForm/step2.vue"; // 分布表单
import Step3 from "../views/main/form/stepForm/step3.vue"; // 分布表单

const routes = [
  {
    // 添加总体布局页 路由配置（其他含有相同主体布局的页面，都在总体布局路由下的子路由）
    path: "/", // 默认地址
    name: "BasicLayout",
    component: BasicLayout,
    children: [
      {
        path: "/",
        redirect: "/overview", // 添加重定向跳转：默认/ 跳转到/overview
      },
      {
        path: "/overview",
        name: "Overview",
        component: Overview,
      },
      {
        path: "/analysis",
        name: "Analysis",
        component: Analysis,
      },
      {
        path: "/form",
        name: "Form",
        component: Form,
        // form下的子表单路由配置
        children: [
          {
            path: "/form/basicForm", // 子路由链接要写全
            name: "BasicForm",
            component: BasicForm,
          },
          {
            path: "/form/stepForm",
            name: "StepForm",
            component: StepForm,
            children: [
              {
                path: "/form/stepForm/info",
                name: "Step1",
                component: Step1,
              },
              {
                path: "/form/stepForm/confirm",
                name: "Step2",
                component: Step2,
              },
              {
                path: "/form/stepForm/result",
                name: "Step3",
                component: Step3,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
