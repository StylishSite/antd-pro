import React from 'react';
import { Form, Button, Select } from 'antd';
import { layout2 } from '@/utils/config';
import GridWrap from '@/components/GridWrap';

const { Option } = Select;

const SheetSearch = ({ querys, handleAdd, dispatch }) => {

  //表单域值发生变化触发
  function handleValuesChange(val) {
    dispatch({
      type: 'userList/syncForm',
      payload: {
        data: val
      }
    })
  }

  //点击查询按钮
  function handleClick(val) {
    dispatch({type: 'userList/clickSearch'});
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
          <Form.Item label="快递公司" name="account">
            <Select value='0'>
              <Option value='0'>全部</Option>
              <Option value='1'>找家纺1</Option>
              <Option value='2'>找家纺2</Option>
              <Option value='3'>找家纺3</Option>
            </Select>
          </Form.Item>
          <Form.Item label=" " colon={false}>
            <Button type='primary' onClick={handleClick} style={{ marginRight: '16px' }}>查询</Button>
            <Button onClick={handleAdd}>重置</Button>
          </Form.Item>
        </GridWrap>
      </Form>
    </>
    
  );
};

export default SheetSearch
