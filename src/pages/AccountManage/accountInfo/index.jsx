/**
 * @page: 用户列表页面
 * @author:Elvis 
 */

import React, { useState, useRef } from 'react';
import { connect } from 'umi';
import { Spin, Button, Input, Form, DatePicker, Radio, Cascader } from 'antd';
import { real_name } from '@/utils/rule';
const { TextArea } = Input;


const AccountInfo = ({ loading, querys, data, pagination, dispatch }) => {

  const onFinish = val => {
    console.log(val);
  }

  return (
    <div className="zjf-container">
      <Spin spinning={loading}>
        <h1 className="page-title">基本信息</h1>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          layout="horizontal"
          onFinish={onFinish}
        >
          <Form.Item label="用户头像" name="avator">
            <Input style={{ width: 240 }} />
          </Form.Item>
          <Form.Item label="用户名" autoComplete="off" name="nick_ame" rules={
            [
              real_name
            ]
            }>
            <Input style={{ width: 240 }} />
          </Form.Item>
          <Form.Item label="真实姓名" name="real_name">
            <Input style={{ width: 240 }} />
          </Form.Item>
          <Form.Item label="性别" name="sex">
            <Radio.Group>
              <Radio value={1}>保密</Radio>
              <Radio value={2}>男</Radio>
              <Radio value={3}>女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="生日" name="birthy">
            <DatePicker />
          </Form.Item>
          <Form.Item label="手机号" name="phone">
            <Input style={{ width: 240 }} />
          </Form.Item>
          <Form.Item label="所在地区" name="address">
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
          <Form.Item label="阿里旺旺">
            <Input style={{ width: 240 }} />
          </Form.Item>
          <Form.Item label="QQ">
            <Input style={{ width: 240 }} />
          </Form.Item>
          <Form.Item label=" " colon={false} >
            <Button htmlType="submit" type="primary">保存</Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  )
}
export default connect(({ accountInfo, loading }) => ({
  loading: loading.global,
  accountInfo,
}))(AccountInfo)