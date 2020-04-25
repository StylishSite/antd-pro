//编辑活动模版

import React from 'react';
import { Form, Input, Select, DatePicker, Radio } from 'antd';
import { layout1 } from '@/utils/config';

const { Option } = Select;
const { RangePicker } = DatePicker;

export default ({ item= { total: 1, type: 1, userType: 1 } }) => {
  
  return (
    <Form { ...layout1 } initialValues={{ ...item }}>
      <Form.Item name="name" label="活动名称" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="company" label="快递公司">
        <Select defaultValue="lucy" style={{ width: 120 }}>
          <Option value="lucy">中通</Option>
          <Option value="lucy1">神通</Option>
        </Select>
      </Form.Item>
      <Form.Item name="address" label="快递网点">
        <Select defaultValue="lucy" style={{ width: 120 }}>
          <Option value="lucy">网点1</Option>
          <Option value="lucy1">网点2</Option>
        </Select>
      </Form.Item>
      <Form.Item name="time" label="活动时间">
        <RangePicker
          showTime={{ format: 'HH:mm' }}
          format="YYYY-MM-DD HH:mm"
        />
      </Form.Item>
      <Form.Item name="total" label="是否控制单量">
        <Radio.Group>
          <Radio value={1}>是</Radio>
          <Radio value={2}>否</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="type" label="控制单量类型">
        <Radio.Group>
          <Radio value={1}>日单量</Radio>
          <Radio value={2}>总单量</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="day" label="日单量">
        <Input />
      </Form.Item>
      <Form.Item name="all" label="总单量">
        <Input />
      </Form.Item>
      <Form.Item name="userType" label="参与用户">
        <Radio.Group>
          <Radio value={1}>全部</Radio>
          <Radio value={2}>指定用户</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="user" label="参与用户列表">
        <Input />
      </Form.Item>
    </Form>
  )
}