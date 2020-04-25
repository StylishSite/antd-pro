/**
 * @page: 优惠快递页面
 * @author:Elvis 
 */

import React, { useState } from 'react';
import HeaderTab from '@/components/CommonTab';
import EditModal from './components/EditModal';
import InsideExpress from './insideExpress';
import UserExpress from './useExpress';
import MatchExpress from './matchExpress';
import { Spin } from 'antd';
import { connect } from 'umi';
import matchExpress from './matchExpress';

const  CommonExpress = ({ loading, dispatch, commonExpress }) => {

  const { type, data, queryInside, queryUser, queryMatch, pagination } = commonExpress;

  const tabArr = [
    { key: '1', tab: '找家纺内部快递' },
    { key: '2', tab: '用户快递' },
    { key: '3', tab: '网点匹配设置' },
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
      type: 'commonExpress/switchTab',
      payload: {
        type: val
      }
    })
  }

  return (
    <div className="zjf-container">
      <Spin spinning={loading}>
        <HeaderTab type={type} data={tabArr} onChange={handleTabChange}/>
        { type === '1' && <InsideExpress data={data} pagination={pagination} queryInside={queryInside} dispatch={dispatch} /> }
        { type === '2' && <UserExpress data={data} pagination={pagination} queryInside={queryUser} dispatch={dispatch} /> }
        { type === '3' && <MatchExpress data={data} pagination={pagination} queryInside={queryMatch} dispatch={dispatch} /> }
      </Spin>
    </div>
  )
}

export default connect(({ commonExpress, loading }) => ({
  loading: loading.global,
  commonExpress: commonExpress
}))(CommonExpress)
 