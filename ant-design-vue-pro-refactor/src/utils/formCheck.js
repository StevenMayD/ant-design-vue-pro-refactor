/* 参数空值校验
  暴露 方法 nonNullCheck 外界调用js
*/
export function isNullCheck(param) {
  if (param === "") {
    return true;
  } else {
    return false;
  }
}
