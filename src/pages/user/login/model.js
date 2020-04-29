import { accountLogin, getRoutes } from './service'
import { setAuthority, setToken, setCurrentUser, setRoutes, setButtons, removeAll } from '@/utils/authority';
import { getPageQuery, formatRoutes } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: '_login',

  state: {

  },

  effects: {

    * login ({ payload }, { call, put }){
      const response = yield call(accountLogin, payload);
      if (response.error_description) {
        notification.error({
          message: response.error_description,
        });
      } else {
        //更新登录状态
        yield put({
          type: 'changeLoginStatus',
          payload: {
            status: true,
            type: 'login',
            data: { ...response },
          },
        });
        const responseRoutes = yield call(getRoutes);
        setRoutes(formatRoutes(responseRoutes.data));//缓存菜单信息
        reloadAuthorized();
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            redirect = null;
          }
        }
        yield put(routerRedux.replace(redirect || '/'));
      }
    }
  },

  reducers: {
    changeLoginStatus(state, { payload }) {//控制登录状态
      const { status, type } = payload;
      if (status) {
        const {
          data: { token_type, access_token, role_name, account, user_name, avatar },
        } = payload;
        const token = `${token_type} ${access_token}`;
        setToken(token);
        setAuthority(role_name);
        setCurrentUser({ avatar, account, name: user_name, authority: role_name });
      } else {
        removeAll();
      }
      return {
        ...state,
        status: type === 'login' ? (status ? 'ok' : 'error') : '',
        type: payload.type,
      };
    },

    saveMenuData(state, { payload }) {//存储路由信息
      const { routes, buttons } = payload;
      setRoutes(formatRoutes(routes));
      return {
        ...state,
      };
    },
  }
}