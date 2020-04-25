import React from 'react';

import { Modal } from 'antd';


export default ({ title, visible, onOk, onCancel, children, width='500px' }) => {

  return (
    <Modal
      destroyOnClose={true}
      maskClosable={false}
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      width={width}
    >
     { children }
    </Modal>
  )
}