import React from 'react';
import { Row, Col } from 'antd';
import MyAccount from './MyAccount';
import SaleTrend from './SalesTrend';
import MessageNotice from './MessageNotice';

export default ({}) => {
  return (
    <Row gutter={24}>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }}>
        <MyAccount />
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }}>
        <SaleTrend />
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }}>
        <MessageNotice />
      </Col>
    </Row>
  )
}