import React from 'react';

import { Select, Input, Form } from 'antd';
import { layout1 } from '@/utils/config';
import CommonModal from '@/components/CommonModal';

const { Option } = Select;

export default ({ title, visible, handleOk, handleCancel, item={} }) => {

  return (
    <CommonModal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
     <Form { ...layout1 } initialValues={{ ...item }}>
        <Form.Item name="account" label="员工账号" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="name" label="员工姓名" rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="联系方式" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="登陆密码">
          <Input.Password />
        </Form.Item>
        <Form.Item name="adduser" label="角色">
          <Select>
            <Option value='1'>管理员</Option>
            <Option value='2'>客服</Option>
            <Option value='3'>超级管理员</Option>
          </Select>
        </Form.Item>
      </Form>
    </CommonModal>
  )
}