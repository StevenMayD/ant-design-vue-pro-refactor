module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 这里的选项会传递给 css-loader
        modifyVars: {
          "primary-color": "#1890ff", // 全局生效的主题颜色配置
        },
        javascriptEnabled: true, //允许链式调用的换行
      },
    },
  },
};
