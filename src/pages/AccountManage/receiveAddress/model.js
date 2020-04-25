import { query } from './service';

export default {
  namespace: 'reveiveAddress',

  state: {
    data: [],//用户列表数据
    querys: {},//搜索条件
    pagination: {//分页
      current: 1,
      total: 3,
      pageSize: 10,
      showSizeChanger: true,
      showQuickJumper: true,
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        // if(location.pathname === '/usermanage/userList') {
        //   dispatch({ type: 'getUserList' });
        // }
      });
    },
  },

  effects: {
    /**
     * 同步表单信息
     * @data {object} 发生更改的表单项 
     */
    * syncForm({ payload }, { put, call, select } ) {
      const { data } = payload;
      const { querys } = yield select(state => state.userList);
      yield put({
        type: 'updateAction',
        payload: {
          querys: {
            ...querys,
            ...data
          }
        }
      })
    },

    //获取用户列表
    * getUserList({ payload }, { put, call, select } ) {
      const { querys, pagination } = yield select(state => state.userList);
      const { data } = yield call(query,{
        ...querys,
        ...pagination
      })

      yield put({
        type: 'updateAction',
        payload: {
          data
        }
      })
    },

    /**
     * 表格页数变化
     * @page {object} 表格页数变化后的对象 
     */
    * getUserList({ payload }, { put, call, select } ) {
      const { querys, page } = yield select(state => state.userList);
      const { data } = yield call(query,{
        ...querys,
        ...page
      })
      yield put({
        type: 'updateAction',
        payload: {
          data,
          pagination: page
        }
      })
    },

    //点击查询按钮
    * clickSearch({ payload }, { put, call, select } ) {
      const { pagination, querys } = yield select(state => state.userList);
      const { data } = yield call(query,{
        ...querys,
        pageSize: pagination.pageSize,
        current: 1,
      })

      pagination.current = 1;//重置页数为1
      yield put({
        type: 'updateAction',
        payload: {
          data,
          pagination
        }
      })
    },

    //点击查询按钮
    * updateMark({ payload }, { put, call, select } ) {
      const { mark, id } = payload;
      yield call(query,{
        id,
        mark,
      })
      dispatch({ type: 'getUserList'});
    },
  },

  reducers: {
    updateAction(state, action) {
      return { ...state, ...action.payload };
    },
  }
}