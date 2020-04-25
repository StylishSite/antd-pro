/**
 * 添加用户列表
 */

import React from 'react';
import { Button } from 'antd';
import CommonTable from '@/components/CommonTable';

export default ({ data, handleTabChange, handleDelete, handleAdd, handleSelect }) => {

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
      <Form
        {...layout2}
          layout='horizontal'
        >
        <Form.Item label="用户名称" name="account">
          <Input placeholder="请输入用户名称"/>
        </Form.Item>
        <Form.Item label=" " colon={false}>
          <Button type="primary" onClick={handleAdd}>查询</Button>
        </Form.Item>
      </Form>
      <CommonTable columns={columns} data={datas} rowSelection={{ type: 'checkbox', onChange={handleSelect}}} onChange={handleTabChange} />
    </>
  )
}