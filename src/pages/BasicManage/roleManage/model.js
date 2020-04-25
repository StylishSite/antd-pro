import { query } from './service';

export default {
  namespace: 'roleManage',

  state: {
    data: [],//员工列表数据
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
        console.log(location,'l')
      });
    },
  },

  effects: {

    //获取员工列表
    * getUserList({ payload }, { put, call, select } ) {
      const { searchObj, pagination } = yield select(state => state.userList);
      const { data } = yield call(query,{
        ...searchObj,
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
      const { searchObj } = yield select(state => state.userList);
      const { page } = payload;
      const { data } = yield call(query,{
        ...searchObj,
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
      const { searchObj, pagination } = yield select(state => state.userList);
      const { data } = yield call(query,{
        ...searchObj,
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
  },

  reducers: {
    updateAction(state, action) {
      return { ...state, ...action.payload };
    },
  }
}