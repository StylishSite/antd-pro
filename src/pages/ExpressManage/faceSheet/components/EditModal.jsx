import React from 'react';

import { Select, Input, Form, Cascader } from 'antd';
import { layout1 } from '@/utils/config';
import CommonModal from '@/components/CommonModal';

const { Option } = Select;
const { TextArea } = Input;

export default ({ title, visible, handleOk, handleCancel, obj={} }) => {

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

  function handleChange(val) {
    console.log(val)
  }

  return (
    <CommonModal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      width='600px'
    >
     <Form { ...layout1 } initialValues={{ ...obj }}>
        <Form.Item name="account" label="面单名称" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="name" label="面单获取平台" rules={[{ type: 'email' }]}>
          <Select>
            <Option value='1'>管理员</Option>
            <Option value='2'>客服</Option>
            <Option value='3'>超级管理员</Option>
          </Select>
        </Form.Item>
        <Form.Item name="code1" label="签约编码" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <Input />
        </Form.Item>
        <Form.Item name="type" label="编码类型">
          <Select>
            <Option value='1'>管理员</Option>
            <Option value='2'>客服</Option>
            <Option value='3'>超级管理员</Option>
          </Select>
        </Form.Item>
        <Form.Item name="code2" label="回流编码" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <Input />
        </Form.Item>
        <Form.Item name="person" label="发货人" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="联系电话" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <Input />
        </Form.Item>
        <Form.Item name="area" label="发货地区">
          <Cascader options={options} onChange={handleChange} placeholder="Please select" />
        </Form.Item>
        <Form.Item name="address" label="回流编码" extra="注意：发货信息请跟淘宝、京东等平台发货信息保持一致" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </CommonModal>
  )
}