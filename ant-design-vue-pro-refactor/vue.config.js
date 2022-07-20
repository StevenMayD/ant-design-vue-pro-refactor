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
  // 配置代理mock接口
  devServer: {
    // 代理
    proxy: {
      // 当遇到此接口时
      "/api": {
        target: "http://localhost:3000",
        // 通过bypass做一些mock数据的拦截
        bypass: function (req, res) {
          if (req.headers.accept.indexOf("html") != -1) {
            console.log("=dsw= 跳过浏览器请求的代理");
            return "/index.html";
          } else if (process.env.MOCK === "true") {
            console.log("=dsw= mock数据");
            // 判断请求环境为mock时 做如下处理
            // 将请求链接/api/overview/chart，拆分解析拼接出mock文件地址
            const name = req.path.split("/api/")[1].split("/").join("_");
            const mock = require(`./mock/${name}`); // 将mock下文件require进来
            const result = mock(req.method);
            // 清缓存（由于请求后，变量mock存有缓存数据，当本地mock模拟数据修改后，再次请求无法生效）
            delete require.cache[require.resolve(`./mock/${name}`)];
            return res.send(result);
          } else {
            return null;
          }
        },
      },
    },
  },
};
