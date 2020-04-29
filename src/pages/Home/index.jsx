/**
 * @page: 用户列表页面
 * @author:Elvis 
 */

import React, { useState, useRef } from 'react';
import { connect } from 'umi';
import { Spin, Button, Input, Form, DatePicker, Radio, Cascader } from 'antd';
const { TextArea } = Input;
import HeaderDisplay from './component/HeaderDisplay';
import Section from './component/Section';
import NewGoods from './component/NewGoods';

const AccountInfo = ({ loading, querys, data, pagination, dispatch }) => {

  const onFinish = val => {
    console.log(val);
  }

  return (
    <Spin spinning={loading}>
      <HeaderDisplay />
      <Section/>
      <NewGoods />
    </Spin>
  )
}
export default connect(({ accountInfo, loading }) => ({
  loading: loading.global,
  accountInfo,
}))(AccountInfo)