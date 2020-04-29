import React from 'react';
import { Table } from 'antd';
import { isEqual } from 'lodash';

/**
 * desc: 公共表格组件，方便后期进行样式统一更改 
 * @columns {Array} 表格column配置
 * @data {Array} 表格数据
 * @page {object} 表格分页对象
 * @onChange {function} 表格发生变化的函数（分页， 排序，过滤等） 
 * @rowSelection {object} 表格选择功能配置
 * @title {function} 表格顶部添加按钮
 */

 function isRender(preProps, nextProps) {
   //如果 两个值完全相同，那么返回 true，否则返回 false
  if(!isEqual(preProps.data, nextProps.data) || !isEqual(preProps.pagination, nextProps.pagination)) {
    return false;//当数据和分页发生变化时重新render
  }
  return true;
 }

export default React.memo(({ columns, data, pagination=null, onChange=null, rowSelection=null, title=null }) => {
  console.log('render', '123')
  return (
    <Table 
      rowSelection={rowSelection}
      columns={columns} 
      dataSource={data} 
      onChange={onChange}
      pagination={pagination}
      bordered
      title={title}
    />
  )
}, isRender)