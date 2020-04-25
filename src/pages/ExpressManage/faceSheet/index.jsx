/**
 * @page: 面单配置页面
 * @author:Elvis 
 */

import React, { useState } from 'react';
import { Spin } from 'antd';
import { connect } from 'umi';
import SheetSearch from './components/SheetSearch';
import SheetList from './components/SheetList';
import EditModal from './components/EditModal';

const FaceSheet = ({ loading, dispatch, faceSheet }) => {

  const { list, querys, data, pagination } = faceSheet
  const [ visible, setVisible ] = useState(false);

  const [ title, setTitle ] = useState('');

  const [ item, setItem ] = useState({});

  function handleVisible(type, obj) {
    if(type == 1) {
      setTitle('修改面单');
      setItem(obj);
      setVisible(true);
    } else {
      setTitle('新增面单');
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
        <h1 className="page-title">面单配置</h1>
        <SheetSearch dispatch={dispatch} list={list} querys={querys} handleAdd={handleVisible}/>
        <SheetList data={data} pagination={pagination} handleAdd={handleVisible} />
        <EditModal visible={visible} item={item} title={title} handleOk={handleOk} handleCancel={handleCancel} />
      </Spin>
    </div>
  )
}

export default connect(({ faceSheet, loading }) => ({
  loading: loading.global,
  faceSheet: faceSheet
}))(FaceSheet)
