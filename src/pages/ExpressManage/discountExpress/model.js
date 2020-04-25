import { query } from './service';

export default {
  namespace: 'discountExpress',
  state: {
    data: [],//员工列表数据
    type: '1',//1:启用中 2:已结束
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
        console.log(location,'l')
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
      const { querys } = yield select(state => state.discountExpress);
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

    //获取快递列表
    * getExpressList({ payload }, { put, call, select } ) {
      const { querys, pagination } = yield select(state => state.discountExpress);
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
     * 表格发生变化（分页，排序，过滤等）
     * @page {object} 表格页数变化后的对象 
     */
    * handleTableChange({ payload }, { put, call, select } ) {
      const { querys } = yield select(state => state.discountExpress);
      const { page } = payload;
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
      const { querys, pagination } = yield select(state => state.discountExpress);
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

    //切换tab
    * switchTab({ payload }, { put, call, select } ) {
      const { type } = payload;
      yield put({
        type: 'updateAction',
        payload: {
          type,
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