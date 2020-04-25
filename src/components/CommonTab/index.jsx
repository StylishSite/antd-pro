import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;


export default ({ data=[], type, onChange }) => {
  return (
    <Tabs activeKey={type} onChange={onChange}>
      {
        data.map(item => (
          <TabPane tab={item.tab} key={item.key}>
          </TabPane>
        ))
      }
    </Tabs>
  )
}