import React from 'react';
import styles from './index.less';

const data = [
  { key: 1, title: '待付款', value: 2344 },
  { key: 2, title: '代发货', value: 1244 },
  { key: 3, title: '已发货', value: 456 },
  { key: 4, title: '缺货/下架', value: 20 },
  { key: 5, title: '退货退款', value: 13 },
  { key: 6, title: '仅退款', value: 12 },
  { key: 7, title: '待评价', value: 12 },
  { key: 8, title: '异常订单', value: 8 },
]

export default ({}) => {
  return (
    <div className={styles.wrap}>
      {
        data.map((item, index) => (
          <div key={item.key} className={styles.wrapBox}>
            <span className={styles.number} style={{ color: index == 7 ? 'red' : '#1890ff' }}>{item.value}</span>
            <span className={styles.title}>{item.title}</span>
          </div>
        ))
      }
    </div>
  )
}
