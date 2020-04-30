import React from 'react';
import Img from '@/assets/logo.svg';
import styles from './index.less';
import { Row, Col } from 'antd';

const data = [
  { key: 1, title: '家纺城1号', value: 16 },
  { key: 2, title: '老娘舅家局', value: 9 },
  { key: 3, title: '菲力家纺城', value: 12 },
]

export default ({}) => {
  return (
    <Row gutter={24}>
      {
        data.map(v => (
          <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }}>
            <div key={v.key} className={styles.wrapBottom}>
              <img className={styles.img} src={Img} />
              <div className={styles.goods}>
                <span>{v.title}</span>
                <span style={{ color: '#000' }}>新品数<span style={{ color: '#108ee9', marginLeft: '4px' }}>{v.value}</span></span>
              </div>
              <span style={{ color: '#108ee9', cursor: 'pointer' }}>立即查看</span>
            </div>
          </Col>
        ))
      }
    </Row>
  )
}