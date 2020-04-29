import React from 'react';

import { Modal } from 'antd';


export default ({ title, visible, onOk, onCancel, children, width='500px', forceRender=false }) => {

  return (
    <Modal
      destroyOnClose={true}
      maskClosable={false}
      title={title}
      forceRender
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      width={width}
    >
     { children }
    </Modal>
  )
}