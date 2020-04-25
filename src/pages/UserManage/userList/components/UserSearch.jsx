import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { layout2 } from '@/utils/config';
import GridWrap from '@/components/GridWrap';

const { Option } = Select;

/**
 * 
 * @param {object} querys: 查询条件 
 */
const userSearch = ({ querys, dispatch }) => {

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

  //导出接口
  const exportMsg = () => {

  }

  return (
    <Form 
      {...layout2}
      layout='horizontal' 
      onValuesChange={handleValuesChange}
      initialValues={{
        ...querys
      }}
    >
      <GridWrap>
        <Form.Item label="账号" name="account">
          <Input placeholder="请输入账号" />
        </Form.Item>
        <Form.Item label="联系方式" name="phone">
          <Input placeholder="请输入联系方式" />
        </Form.Item>
        <Form.Item label="是否开通仓储" name="isopen">
          <Select>
            <Option value="1">是</Option>
            <Option value="2">否</Option>
            <Option value="3">全部</Option>
          </Select>
        </Form.Item>
        <Form.Item label="备注关键字" name="desc">
          <Input placeholder="请输入备注信息" />
        </Form.Item>
        <Form.Item label=" " colon={false}>
          <Button type='primary' onClick={handleClick} style={{ marginRight: '16px' }}>查询</Button>
          <Button onClick={exportMsg}>重置</Button>
        </Form.Item>
      </GridWrap>
    </Form>
  );
};

export default userSearch;
