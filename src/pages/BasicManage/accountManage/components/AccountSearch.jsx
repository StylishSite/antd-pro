import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { layout2 } from '@/utils/config';
import GridWrap from '@/components/GridWrap';

const AccountSearch = ({ querys, dispatch, handleVisible }) => {

  //表单域值发生变化触发
  function handleValuesChange(val) {
    dispatch({
      type: 'accountManage/syncForm',
      payload: {
        data: val
      }
    })
  }

  //点击查询按钮
  function handleClick(val) {
    dispatch({type: 'accountManage/clickSearch'});
  }

  return (
    <>
      <Form 
        {...layout2}
        layout='horizontal' 
        onValuesChange={handleValuesChange}
        initialValues={{
          ...querys
        }}
      >
        <GridWrap>
          <Form.Item label="员工姓名" name="account">
            <Input placeholder="请输入员工姓名" />
          </Form.Item>
          <Form.Item label="员工手机号" name="phone">
            <Input placeholder="请输入员工手机号" />
          </Form.Item>
          <Form.Item label=" " colon={false}>
            <Button type='primary' onClick={handleClick} style={{ marginRight: '16px' }}>查询</Button>
            <Button onClick={handleVisible}>重置</Button>
          </Form.Item>
        </GridWrap>
      </Form>
    </>
  );
};

export default AccountSearch;
