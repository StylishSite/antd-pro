/**
 * 用户展示列表
 */

import React from 'react';
import { Button } from 'antd';
import CommonTable from '@/components/CommonTable';

export default ({ data, handleTabChange, handleDelete, handleAdd }) => {

  const columns = [
    { 
      title: '序号',
      key: 'id',
      dataIndex: 'id'
    },
    { 
      title: '用户名',
      key: 'name',
      dataIndex: 'name' 
    },
    { 
      title: '操作', 
      key: 'id', 
      dataIndex: 'opera',
      render: text => (
        <span className="opera-span-common">
          <span onClick={() => handleDelete(1)}>删除</span>
        </span>
      ) 
    },
  ]

  const datas = [
    { id: 1, name: '测试1' },
    { id: 2, name: '测试2' },
    { id: 3, name: '测试3' },
    { id: 4, name: '测试4' },
    { id: 5, name: '测试5' },
  ]

  return (
    <>
      <Button type="primary" onClick={handleAdd}>新增参与用户</Button>
      <CommonTable columns={columns} data={datas} onChange={handleTabChange}/>
    </>
  )
}