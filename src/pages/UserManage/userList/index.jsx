/**
 * @page: 用户列表页面
 * @author:Elvis 
 */

import React, { useState, useRef } from 'react';
import List from './components/UserList';
import Search from './components/UserSearch';
import { connect } from 'umi';
import { Spin, Modal, Input } from 'antd';
const { TextArea } = Input;


const UserComponent = ({ loading, querys, data, pagination, dispatch }) => {
  console.log(loading,'load')

  const [ visible, setVisible ] = useState(false);
  const [ id, setId ] = useState(undefined);
  const inputRef = useRef(null);
  
  function handleRemarks(val) {
    setVisible(true);
    setId(val)
  }

  function handleOk() {
    setVisible(false);
  }

  return (
    <div className="zjf-container">
      <Spin spinning={loading}>
        <h1 className="page-title">用户列表</h1>
        <Search querys={querys} dispatch={dispatch} />
        <List data={data} pagination={pagination} dispatch={dispatch} handleRemarks={handleRemarks} />
        <Modal
          title="备注"
          visible={visible}
          onOk={handleOk}
          onCancel={ () => setVisible(false) }
        >
          <TextArea ref={inputRef} rows={4} />
        </Modal>
      </Spin>
    </div>
  )
}
export default connect(({ userList, loading }) => ({
  loading: loading.global,
  querys: userList.querys,
  data: userList.data,
  pagination: userList.pagination
}))(UserComponent)