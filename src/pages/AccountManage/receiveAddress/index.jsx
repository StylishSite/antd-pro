import React, { useState, useCallback } from 'react';
import { connect } from 'umi';
import { Spin, Popconfirm, Button, Alert } from 'antd';
import CommonTable from '@/components/CommonTable';


const datas = [
  {
    key: "1",
    name: "John Brown",
    area: '上海',
    telephone: '139xxxxxxxx',
    phone: '',
    isDefault: true,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "1",
    name: "John Brown",
    area: '上海',
    telephone: '139xxxxxxxx',
    phone: '',
    isDefault: false,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "1",
    name: "John Brown",
    area: '上海',
    telephone: '139xxxxxxxx',
    phone: '',
    isDefault: false,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "1",
    name: "John Brown",
    area: '上海',
    telephone: '139xxxxxxxx',
    phone: '',
    isDefault: false,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
];

const ReceiveAddress  = ({ loading, receiveAddress, pagination }) => {

  const [ data, setData ] = useState(datas);


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
      render: (text) => (
        <span className="opera-span-common">
           <Popconfirm
            title={text ? '确定取消默认?' : '确定设为默认?'}
            onConfirm={handleDelete}
            okText="确定"
            cancelText="取消"
          >
          <span>{ text ? '取消默认' : '设为默认' }</span>
          </Popconfirm>
          <i>|</i>
          <span onClick={() => handleVisible(1, {})}>编辑</span>
          <i>|</i>
          <Popconfirm
            title="确定要删除吗?"
            onConfirm={handleDelete}
            okText="确定"
            cancelText="取消"
          >
            <span>删除</span>
          </Popconfirm>
        </span>
      )
    },
  ];

  const onTableChange = useCallback(() => (
    console.log(11)
    // dispatch({
    //   type: 'userList/onTabChange',
    //   payload: {
    //     page
    //   }
    // })
  ), [])

  function handleDelete() {
    console.log(123)
  }


  function handleClick() {
    console.log(123);

    setData([]);
  }

  function handleAdd() {

  }

  const title = useCallback(() => {
    return (
      <Button type="primary" onClick={handleAdd}>新增地址</Button>
    )
  })

  return  (
    <div className="zjf-container">
      <Spin spinning={loading}>
        <h1 className="page-title" onClick={handleClick}>账号管理</h1>
        <Alert style={{ marginBottom: '24px' }} message="收货地址最多保存20条，还可以保存12条" type="info" />
        <CommonTable  data={datas} columns={columns} pagination={pagination} onChange={onTableChange} title={title} />
      </Spin>
    </div>
  )
}

export default connect(({  receiveAddress, loading }) => ({
  receiveAddress,
  loading: loading.global
}))(ReceiveAddress)