import React from 'react';
import { Form, Popconfirm, Button, Select, Cascader } from 'antd';
import { layout2, layout3 } from '@/utils/config';
import GridWrap from '@/components/GridWrap/GridComponent1';
import CommonTable from '@/components/CommonTable';
const { Option } = Select;

const datas = [
  {
    key: "1",
    company: "John Brown",
    address: 32,
    plat: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    company: "John Brown",
    address: 32,
    plat: "New York No. 1 Lake Park",
  },
  {
    key: "3",
    company: "John Brown",
    address: 32,
    plat: "New York No. 1 Lake Park",
  }
];

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];



/**
 * @desc: 找家纺内部快递组件
 * @querys {object} : 查询条件 
 * @pagination {object} : 分页配置 
 * @data {object} : 列表数据 
 * @querys {object} : 查询条件 
 */

export default ({ queryInside, dispatch, pagination, data, onTableChange }) => {

  function onChange(val) {
    console.log(val)
  }

  const columns = [
    {
      title: "序号",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "快递公司",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "快递网点",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "分配地区",
      dataIndex: "plat",
      key: "plat"
    },
    {
      title: "操作",
      key: "opera",
      render: (text, record) => (
        <span className="opera-span-common">
          <span>编辑</span>
          <i>|</i>
          <Popconfirm
            title="确定要删除吗?"
            onConfirm={onChange}
            okText="确定"
            cancelText="取消"
          >
            <span>删除</span>
          </Popconfirm>
        </span>
      )
    },
  ];

  //表单域值发生变化触发
  const handleValuesChange = (val) => {
    dispatch({
      type: 'userList/syncForm',
      payload: {
        data: val
      }
    })
  }

  //点击查询按钮
  const handleClick = () => {
    dispatch({type: 'userList/clickSearch'});
  }

  return (
    <>
      <Form 
        {...layout2}
        layout='horizontal' 
        onValuesChange={handleValuesChange}
        initialValues={{
          ...queryInside
        }}
      >
        <GridWrap>
          <Form.Item label="快递公司" name="isopen">
            <Select>
              <Option value="1">是</Option>
              <Option value="2">否</Option>
              <Option value="3">全部</Option>
            </Select>
          </Form.Item>
          <Form.Item label="地区" name="isopen">
          <Cascader
            options={options}
          />
          </Form.Item>
          <Form.Item {...layout3}>
            <Button type='primary' onClick={handleClick} style={{ marginRight: '16px' }}>查询</Button>
            <Button onClick={null}>重置</Button>
          </Form.Item>
        </GridWrap>
      </Form>
      <CommonTable  data={datas} columns={columns} title={() => <Button type='primary'>新增匹配规则</Button>} onChange={onTableChange} pagination={pagination}/>
    </>
  );
};

