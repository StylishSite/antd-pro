import React from "react";
import CommonTable from '@/components/CommonTable';
import { Button } from "antd";

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

const UserList = ({ data, pagination, dispatch, handleRemarks }) => {

  function onTableChange(page) {
    dispatch({
      type: 'userList/onTabChange',
      payload: {
        page
      }
    })
  }

  const columns = [
    {
      title: "序号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "用户名",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "联系方式",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "是否开通仓储",
      dataIndex: "isOpen",
      key: "isOpen"
    },
    {
      title: "是否找家纺仓库",
      dataIndex: "isOpen",
      key: "isOpen1"
    },
    {
      title: "注册时间",
      dataIndex: "time",
      key: "time"
    },
    {
      title: "备注信息",
      dataIndex: "desc",
      key: "desc"
    },
    {
      title: "操作",
      key: "opera",
      render: (text, record) => (
        <span className="opera-span-common">
          <span>进入</span>
          <i>|</i>
          <span onClick={() => handleRemarks(record.id || 0)}>备注</span>
        </span>
      )
    },
  ];

  return  (
    <CommonTable  data={datas} columns={columns} onChange={onTableChange} title={() => <Button type="primary">导出</Button>} pagination={pagination}/>
  )
}

export default UserList;
