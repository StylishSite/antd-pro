import React from 'react';
import { Table } from 'antd';

/**
 * desc: 公共表格组件，方便后期进行样式统一更改 
 * @columns {Array} 表格column配置
 * @data {Array} 表格数据
 * @page {object} 表格分页对象
 * @onChange {function} 表格发生变化的函数（分页， 排序，过滤等） 
 * @rowSelection {object} 表格选择功能配置
 * @title {function} 表格顶部添加按钮
 */

 const defaultPage = {//默认的分页配置，可以手动传入分页配置进行覆盖
   showSizeChanger: true,//支持改变每页展示条数
   showQuickJumper: true,//支持快速跳转到某一页
 }

export default ({columns, data, onChange, page=null, rowSelection=null, title=null }) => {
  return (
    <Table 
      rowSelection={rowSelection}
      columns={columns} 
      dataSource={data} 
      onChange={onChange}
      pagination={{ ...defaultPage, ...page }}
      bordered
      title={title}
    />
  )
}