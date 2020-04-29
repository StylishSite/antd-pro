import React, { useState, useCallback } from 'react';
import { connect } from 'umi';
import { Spin, Popconfirm, Button, Alert, Pagination, Modal } from 'antd';
import CommonTable from '@/components/CommonTable';
import EditAddressModal from './component/EditAddressModal'; 
import FooterToolbar from '@/components/FooterToolbar';

const ReceiveAddress  = ({ loading, data, pagination, dispatch }) => {

  const [ visible, setVisible ] = useState(false);
  const [ title, setTitle ] = useState(undefined);
  const [ item, setItem ] = useState({});

  const columns = [
    {
      title: "收件人",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "所在地区",
      dataIndex: "area",
      key: "area"
    },
    {
      title: "详细地址",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "手机",
      dataIndex: "telephone",
      key: "telephone"
    },
    {
      title: "座机",
      dataIndex: "phone",
      key: "phone",
      render: text => text || '-'
    },
    {
      title: "默认",
      dataIndex: "isDefault",
      key: "isDefault",
      render: text => text ? '是' : '否'
    },
    {
      title: "操作",
      key: "opera",
      dataIndex: 'isDefault',
      render: (text, record) => (
        <span className="opera-span-common">
           <Popconfirm
            title={text ? '确定取消默认?' : '确定设为默认?'}
            onConfirm={() => handleSetDefault(record.isDefault, record.id) }
            okText="确定"
            cancelText="取消"
          >
          <span>{ text ? '取消默认' : '设为默认' }</span>
          </Popconfirm>
          <i>|</i>
          <span onClick={() => handleEditAddress(record)}>编辑</span>
          <i>|</i>
          <Popconfirm
            title="确定要删除吗?"
            onConfirm={() => handleDelete(record.id)}
            okText="确定"
            cancelText="取消"
          >
            <span>删除</span>
          </Popconfirm>
        </span>
      )
    },
  ];

  //点击新增地址
  const handleAdd = () => {
    if(data.length >= 20) {
      Modal.info({ content: '收货地址最多保存二十条' });
      return;
    }
    setVisible(true);
    setTitle('新增收货地址');
  }

  //页码发生变化的回调
  const handlePageChange = (current, size) => {
    dispatch({
      type: 'receiveAddress/pageChange',
      payload: {
        type: 1,
        val: current
      }
    })
  }

  //pagesize发生变化的回调
  const handlePageSizeChange = (current, size) => {
    dispatch({
      type: 'receiveAddress/pageChange',
      payload: {
        type: 2,
        val: size
      }
    })
  }

  //设置地址的默认状态
  const handleSetDefault = (isDefault, id) => {
    dispatch({
      type: 'receiveAddress/setDefault',
      payload: {
        isDefault,
        id
      }
    })
  }

  //删除地址
  const handleDelete = (id) => (
    dispatch({
      type: 'receiveAddress/deleteAddress',
      payload: {
        id
      }
    })
  ) 

  //编辑地址

  const handleEditAddress = val => {
    setItem(val);
    setVisible(true);
    setTitle('编辑收货地址');
  }

  const handleOk = () => (
    console.log('handleOk')
  ) 

  const handleCancel = () => {
    setVisible(false);
  }

  const HeaderTitle = () => {
    return (
      <Button type="primary" onClick={handleAdd}>新增地址</Button>
    )
  } 

  return  (
    <div className="zjf-container">
      <Spin spinning={loading}>
        <h1 className="page-title">账号管理</h1>
        <Alert style={{ marginBottom: '24px' }} message="收货地址最多保存20条，还可以保存12条" type="info" />
        <CommonTable  data={data} columns={columns} pagination={false} title={HeaderTitle} />
        <FooterToolbar>
          <Pagination showQuickJumper showSizeChanger current={pagination.current} total={pagination.total} pageSize={pagination.pageSize} onShowSizeChange={handlePageSizeChange} onChange={handlePageChange} />
        </FooterToolbar>
        <EditAddressModal item={item}  title={title} visible={visible} handleOk={handleOk} handleCancel={handleCancel} />
      </Spin>
    </div>
  )
}

export default connect(({  receiveAddress, loading }) => ({
  data: receiveAddress.data,
  pagination: receiveAddress.pagination,
  loading: loading.global
}))(ReceiveAddress)