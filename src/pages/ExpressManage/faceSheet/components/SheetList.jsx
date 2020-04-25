import React, { useState } from "react";
import { Popconfirm, Button } from 'antd';
import CommonTable from '@/components/CommonTable';

const datas = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

const SheetList = ({ data, pagination, handleAdd, dispatch }) => {

  const columns = [
    {
      title: "序号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "面单名称",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "面单获取平台",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "签约编码",
      dataIndex: "code",
      key: "code"
    },
    {
      title: "编码类型",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "回流编号",
      dataIndex: "number",
      key: "number"
    },
    {
      title: "地址信息",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "操作",
      key: "opera",
      render: () => (
        <span className="opera-span-common">
          <span onClick={handleAdd}>授权</span>
          <i>|</i>
          <span onClick={handleAdd}>编辑</span>
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

  function handleDelete() {
    console.log(123)
  }

  function onTableChange(page) {
    dispatch({
      type: 'userList/onTabChange',
      payload: {
        page
      }
    })
  }

  return  (
    <CommonTable  data={datas} columns={columns} onChange={onTableChange} title={() => <Button type="primary">新增授权面单</Button>} pagination={pagination}/>
  )
}

export default SheetList
