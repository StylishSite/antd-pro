import { reloadAuthorized } from './Authorized'; // use localStorage to store the authority info, which might be sent from server in actual project.

// export function getAuthority(str) {
//   const authorityString =
//     typeof str === 'undefined' && localStorage ? localStorage.getItem('antd-pro-authority') : str; // authorityString could be admin, "admin", ["admin"]

//   let authority;

//   try {
//     if (authorityString) {
//       authority = JSON.parse(authorityString);
//     }
//   } catch (e) {
//     authority = authorityString;
//   }

//   if (typeof authority === 'string') {
//     return [authority];
//   } // preview.pro.ant.design only do not use in your production.
//   // preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

//   if (!authority && ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
//     return ['admin'];
//   }

//   return authority;
// }
// export function setAuthority(authority) {
//   const proAuthority = typeof authority === 'string' ? [authority] : authority;
//   localStorage.setItem('antd-pro-authority', JSON.stringify(proAuthority)); // auto reload

//   reloadAuthorized();
// }





//以下是新的逻辑

//设置图片验证码key
export function setCaptchaKey(key) {
  localStorage.removeItem('zjf-erp-captcha-key');
  localStorage.setItem('zjf-erp-captcha-key', key);
}

//获取图片验证码key值
export function getCaptchaKey() {
  return localStorage.getItem('zjf-erp-captcha-key');
}

//验证权限
export function getAuthority(str) {
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];
  const authorityString =
    typeof str === 'undefined' ? localStorage.getItem('zjf-erp-authority') : str;
  // authorityString could be admin, "admin", ["admin"]
  let authority;
  try {
    authority = JSON.parse(authorityString);
  } catch (e) {
    authority = authorityString;
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  return authority;
}

//设置权限
export function setAuthority(authority) {
  const proAuthority =
    typeof authority === 'string'
      ? authority.split(',')
      : typeof authority === 'undefined'
      ? null
      : authority;
  return localStorage.setItem('zjf-erp-authority', JSON.stringify(proAuthority));
}

//获取token
export function getToken() {
  return localStorage.getItem('zjf-erp-token') || '';
}

//设置token
export function setToken(token) {
  localStorage.setItem('zjf-erp-token', token);
}

//获取菜单
export function getRoutes() {
  return JSON.parse(localStorage.getItem('zjf-erp-routes')) || [];
}

//设置菜单
export function setRoutes(routes) {
  localStorage.removeItem('zjf-erp-routes');
  localStorage.setItem('zjf-erp-routes', JSON.stringify(routes));
}

//获取当前用户
export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('zjf-erp-current-user'));
}

//设置当前用户
export function setCurrentUser(account) {
  localStorage.setItem('zjf-erp-current-user', JSON.stringify(account));
}

//登出，清除所有用户信息
export function removeAll() {
  localStorage.removeItem('zjf-erp-authority');
  localStorage.removeItem('zjf-erp-token');
  localStorage.removeItem('zjf-erp-routes');
  localStorage.removeItem('zjf-erp-buttons');
  localStorage.removeItem('zjf-erp-current-user');
  localStorage.removeItem('zjf-erp-captcha-key');
}



export function getButtons() {
  return JSON.parse(localStorage.getItem('sword-buttons')) || [];
}

export function getButton(code) {
  const buttons = getButtons();
  const data = buttons.filter(d => {
    return d.code === code;
  });
  return data.length === 0 ? [] : data[0].buttons;
}

export function setButtons(buttons) {
  localStorage.removeItem('sword-buttons');
  localStorage.setItem('sword-buttons', JSON.stringify(buttons));
}
