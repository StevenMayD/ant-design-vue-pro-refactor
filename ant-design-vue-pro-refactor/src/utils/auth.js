/*
  权限处理（封装的工具方法）
*/

// 记录当前用户权限
const currentAuth = ["admin"]; // 暂时固定为admin角色
export { currentAuth };

// 获取当前用户权限
export function getCurrentAuthority() {
  return currentAuth;
}

/* some() 方法：用于检测数组中的元素是否满足指定条件（函数提供）
    如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测
    如果没有满足条件的元素，则返回false

    includes() 方法：用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false
*/
// 核验带校验权限 是否包含当前用户权限
export function check(authority) {
  const current = getCurrentAuthority();
  // 判断数组authority是否包含 数组current中的元素
  var authCheck = current.some((item) => authority.includes(item));
  return authCheck;
}
