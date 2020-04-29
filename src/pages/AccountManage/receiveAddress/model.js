import { query, deleteAddress } from './service';
import { Modal } from 'antd';

export default {
  namespace: 'receiveAddress',

  state: {
    data: [],//用户列表数据
    pagination: {//分页
      current: 1,
      total: 0,
      pageSize: 10,
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if(location.pathname === '/account/receiveAddress') {
          dispatch({ type: 'getAddressList' });
        }
      });
    },
  },

  effects: {

    //获取收货地址列表
    * getAddressList({ payload }, { put, call, select } ) {
      const { pagination } = yield select(state => state.receiveAddress);
      const { datas } = yield call(query,{
        current: pagination.current,
        pageSize: pagination.pageSize
      })

      pagination.total = datas.total;
      pagination.current = datas.current;
      pagination.pageSize = datas.pageSize;

      yield put({
        type: 'updateAction',
        payload: {
          data: datas.data,
          pagination
        }
      })
    },

    /**
     * 表格页数变化
     * @type {number} 1: 页码变化， 2：页数变化
     * @val {number} 变化后的值 
     */
    * pageChange({ payload }, { put, call, select } ) {
      const { type, val } = payload;
      const { pagination } = yield select(state => state.receiveAddress);
      if(type === 1) {
        pagination.current = val;
      } else {
        pagination.pageSize = val;
      }
      const { datas } = yield call(query,{
        current: pagination.current,
        pageSize: pagination.pageSize
      })

      pagination.total = datas.total;
      pagination.current = datas.current;
      pagination.pageSize = datas.pageSize;

      yield put({
        type: 'updateAction',
        payload: {
          data: datas.data,
          pagination
        }
      })
    },

    /**
     * 设置地址默认
     * @isDefault {boolean} 初始为默认还是非默认
     * @id {number} 需要改变的地址的id 
     */
    * setDefault({ payload }, { put, call, select } ) {
      const { isDefault, id } = payload;
      if(isDefault) {
        yield call(deleteAddress,{
          id
        })
      } else {
        yield call(deleteAddress,{
         id
        })
      }
      Modal.success({ content: '设置成功！' });

      yield put({ type: 'getAddressList' });
    },

    /**
     * 删除地址信息
     * @isDefault {boolean} 初始为默认还是非默认
     * @id {number} 需要改变的地址的id 
     */
    * deleteAddress({ payload }, { put, call, select } ) {
      const { id } = payload;
      yield call(deleteAddress,{
        id
      })
      Modal.success({ content: '删除成功！' });
      yield put({ type: 'getAddressList' });
    },
  },

  reducers: {
    updateAction(state, action) {
      return { ...state, ...action.payload };
    },
  }
}