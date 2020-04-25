/**
 * @page: 角色管理页面
 * @author:Elvis 
 */
import { connect } from 'umi';
import { Spin, Button } from 'antd';
import React, { useState } from 'react';
import RoleList from './components/roleList';
import EditModal from './components/EditModal';

const RoleComponent = ({ data, loading, pagination, dispatch }) => {

  const [ visible, setVisible ] = useState(false);

  const [ title, setTitle ] = useState('角色信息');

  const [ item, setItem ] = useState({ id: 0, obj: {}});

  function handleVisible(type, obj={}) {
    if(type == 1) {
      setTitle('修改角色');
      setItem(obj);
      setVisible(true);
    } else {
      setTitle('添加角色');
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
        <h1 className="page-title">角色管理</h1>
        <RoleList data={data} dispatch={dispatch} pagination={pagination} handleEdit={handleVisible} />
        <EditModal visible={visible} item={item} title={title} handleOk={handleOk} handleCancel={handleCancel} />
      </Spin>
    </div>
  )
}

export default connect(({ roleManage, loading }) => ({
  loading: loading.global,
  data: roleManage.data,
  pagination: roleManage.pagination
}))(RoleComponent) 