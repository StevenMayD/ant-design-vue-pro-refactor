import axios from "axios"; // 先安装 npm install --save axios
import { notification } from "ant-design-vue";

function request(options) {
  return axios(options)
    .then((res) => {
      // 请求成功 则直接返回
      return res;
    })
    .catch((error) => {
      // 请求失败 则错误弹框
      const {
        response: { status, statusText },
      } = error; // 将error对象拆分解析
      // 错误弹框notification
      notification.error({
        // 这里h变量是jsx格式中必须的，但h又未使用，eslint的检查会报错，解决办法: 在出错行之前，添加如下一行注释， 让这“message: (h) => {”一行不进行检查
        // eslint-disable-next-line no-unused-vars
        message: (h) => {
          <div>
            请求失败：<span>{status} : </span> {options.url}
          </div>;
        },
        description: statusText,
      });
      return Promise.reject(error);
    });
}

export default request;
