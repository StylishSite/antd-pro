/**
 * @page: 优惠快递页面
 * @author:Elvis 
 */

import React, { useState } from 'react';
import DiscountSearch from './components/DiscountSearch';
import DiscountList from './components/DiscountList';
import HeaderTab from '@/components/CommonTab';
import EditModal from './components/EditModal';
import { Alert, Spin } from 'antd';
import { connect } from 'umi';

const  DiscountExpress = ({ loading, dispatch, discountExpress }) => {

  const { type, data, querys, pagination } = discountExpress;

  const tabArr = [
    { key: '1', tab: '启用中' },
    { key: '2', tab: '已结束' },
  ]

  const [ visible, setVisible ] = useState(false);

  const [ title, setTitle ] = useState('');

  const [ item, setItem ] = useState({});

  function handleVisible(type, obj) {
    if(type == 1) {
      setTitle('编辑活动');
      setItem(obj);
      setVisible(true);
    } else {
      setTitle('新增优惠快递');
      setItem({});
      setVisible(true);
    }
  }

  function handleTabChange(val) {
    dispatch({
      type: 'discountExpress/switchTab',
      payload: {
        type: val
      }
    })
  }

  function handleOk() {
    
  }

  function handleCancel() {
    setVisible(false);
  }

  return (
    <div className="zjf-container">
      <Spin spinning={loading}>
        <HeaderTab type={type} data={tabArr} onChange={handleTabChange}/>
        <Alert style={{ marginBottom: '24px' }} message="注意：优惠快递的开始时间和结束时间以订单付款时间为依据" type="warning" />
        <DiscountSearch querys={querys} pagination={pagination} dispatch={dispatch} handleVisible={handleVisible} />
        <DiscountList data={data} pagination={pagination} handleVisible={handleVisible} dispatch={dispatch} />
        <EditModal visible={visible} title={title} handleOk={handleOk} handleCancel={handleCancel} />
      </Spin>
    </div>
  )
}

export default connect(({ discountExpress, loading }) => ({
  loading: loading.global,
  discountExpress: discountExpress
}))(DiscountExpress)
 