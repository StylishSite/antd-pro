import React from 'react';
import { Row, Col } from 'antd';


const GridWrap = (props) => {

  const { children } = props;

  if (!children) {
    return null;
  }

  const cols = [];
  let index = 0;
  
  React.Children.forEach(children, child => {
    index = index + 1;
    cols.push(
      <Col key={index}  xs={24} lg={12} xl={8} xxl={6}>
        {child}
      </Col>
    );
  });

  return (
    <Row gutter={24}>
      {cols}
    </Row>
  )
}

export default GridWrap;