import { query } from './service';

export default {
  namespace: 'commonExpress',
  state: {
    type: '1',// tab, 1:找家纺内部快递 2:用户快递 3:网点匹配设置
    data: [],//员工列表数据
    queryInside: {},//找家纺头部表单
    queryUser: {},//找家纺用户表单
    queryMatch: {},//找家纺匹配网点设置表单
    pagination: {//公用分页，每次切换tab需重置
      current: 1,
      total: 0,
      pageSize: 10,
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        
      });
    },
  },

  effects: {

    //切换tab
    * switchTab({ payload }, { put, call, select } ) {
      const { type } = payload;
      yield put({
        type: 'updateAction',
        payload: { type }
      })
    },

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


  },

  reducers: {
    updateAction(state, action) {
      return { ...state, ...action.payload };
    },
  }
}