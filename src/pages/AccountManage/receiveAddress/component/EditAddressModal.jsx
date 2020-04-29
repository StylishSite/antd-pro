// 新增/编辑地址信息面板

import React from 'react';
import { Form, Input, Cascader, Button } from 'antd';
import CommonModal from '@/components/CommonModal';
import { isEqual } from 'lodash';
import { layout1 } from '@/utils/config';

const { TextArea } = Input

function isRender(pre, next) {
  //如果 两个值完全相同，那么返回 true，否则返回 false
  console.log('render', 'render')
  if(isEqual(pre.item, next.item) && pre.visible === next.visible) {
    return true;//阻止rerender
  }
  return false;
}

export default React.memo(({ item, title, visible, handleOk, handleCancel }) => {
 
  const [form] = Form.useForm();

  return (
    <CommonModal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      width='600px'
    >
      <Form { ...layout1 } form={form} initialValues={{ ...item }}>
        <Form.Item name="message" label="地址识别">
          <div style={{ display: 'flex' }}>
            <TextArea rows={3} placeholder="将收件地址直接复制粘贴到此处。如：李**，13658626452，广州省 广州市 天河区 *********，000022" />
            <Button style={{ marginLeft: '12px' }}>一键识别</Button>
          </div>
        </Form.Item>
        <Form.Item name="real_name" label="收件人" rules={
          [
            { required: true, message: '收件人不能为空' }
          ]
        }>
          <Input placeholder="最多30个字符" maxLength="30" />
        </Form.Item>
        <Form.Item name="phone" label="手机号" rules={
          [
            { required: true, message: '手机号和座机号必须有一项',}
          ]
        }>
          <Input placeholder="请填写手机号，格式：18888888888" />
        </Form.Item>
        <Form.Item name="telphone" label="座机号" rules={
          [
            { required: true, message: '手机号和座机号必须有一项',}
          ]
        }>
          <Input placeholder="请填写座机号，格式：0573-88888888" />
        </Form.Item>
        <Form.Item name="total" label="所在地区" rules={
          [
            { required: true, message: '地区未选择' }
          ]
        }>
          <Cascader 
              style={{ width: 240 }}
              options={[
                {
                  value: 'zhejiang',
                  label: 'Zhejiang',
                  children: [
                    {
                      value: 'hangzhou',
                      label: 'Hangzhou',
                    },
                  ],
                },
              ]}
            />
        </Form.Item>
        <Form.Item name="type" label="详细地址" rules={
          [
            { required: true, message: '详细地址未填写',}
          ]
        }>
          <TextArea rows={4} maxLength="120" placeholder="最多120个字符" />
        </Form.Item>
      </Form>
    </CommonModal>
  )
}, isRender)