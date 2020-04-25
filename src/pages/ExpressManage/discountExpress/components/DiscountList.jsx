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

const DiscountList = ({ data, pagination, dispatch, handleVisible }) => {

  const columns = [
    {
      title: "优先级",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "活动名称",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "快递公司",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "发货网点",
      dataIndex: "code",
      key: "code"
    },
    {
      title: "活动类型",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "开始时间",
      dataIndex: "number",
      key: "number"
    },
    {
      title: "结束时间",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "是否启用",
      dataIndex: "isOpen",
      key: "isopen"
    },
    {
      title: "参与用户",
      dataIndex: "user",
      key: "user"
    },
    {
      title: "操作",
      key: "opera",
      render: () => (
        <span className="opera-span-common">
          <span onClick={() => handleVisible(1, {})}>编辑活动</span>
          <i>|</i>
          <span onClick={handleVisible}>修改运费</span>
        </span>
      )
    },
  ];

  function onTableChange(page) {
    dispatch({
      type: 'userList/onTabChange',
      payload: {
        page
      }
    })
  }

  return  (
    <CommonTable  data={datas} columns={columns} onChange={onTableChange} title={ () => <Button type="primary">新增优惠快递</Button>} pagination={pagination}/>
  )
}

export default DiscountList;
