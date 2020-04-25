import React from "react";
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

const RoleList = ({ data, pagination, handleEdit, dispatch }) => {

  const columns = [
    {
      title: "序号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "角色名称",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "操作",
      key: "opera",
      render: () => (
        <span className="opera-span-common">
          <span onClick={() => handleEdit(1, {})}>编辑</span>
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
    <CommonTable  data={datas} columns={columns} onChange={onTableChange} title={() => <Button type="primary">添加角色</Button>} pagination={pagination}/>
  )
}

export default RoleList;
