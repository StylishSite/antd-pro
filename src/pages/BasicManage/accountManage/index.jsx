/**
 * @page: 账号管理页面
 * @author:Elvis 
 */

import React, { useState } from 'react';
import AccountSearch from './components/AccountSearch';
import AccountList from './components/AccountList';
import EditModal from './components/EditModal';
import { connect } from 'umi';
import { Spin } from 'antd';

const AccountComponent = ({ querys, data, pagination, dispatch, loading }) => {


  const [ visible, setVisible ] = useState(false);

  const [ title, setTitle ] = useState('员工信息');

  const [ item, setItem ] = useState({});

  function handleVisible(type=2,obj={}) {
    if(type == 1) {
      setTitle('修改员工');
      setItem(obj);
      setVisible(true);
    } else {
      setTitle('添加员工');
      setItem({});
      setVisible(true);
    }
  }

  function handleOk() {

  }

  function handleCancel() {
    setVisible(false);
  }

  return (
    <div className="zjf-container">
      <Spin spinning={loading}>
        <h1 className="page-title">账号管理</h1>
        <AccountSearch querys={querys} dispatch={dispatch} handleVisible={handleVisible}/>
        <AccountList data={data} pagination={pagination} dispatch={dispatch} handleVisible={handleVisible} />
        <EditModal visible={visible} item={item} title={title} handleOk={handleOk} handleCancel={handleCancel} />
      </Spin>
    </div>
  )
}

export default connect(({ accountManage, loading }) => ({
  loading: loading.global,
  data: accountManage.data,
  querys: accountManage.querys,
  pagination: accountManage.pagination
}))(AccountComponent)
 