import React from 'react';

import CommonModal from '@/components/CommonModal';
import ExpressComponent from './ExpressComponent';

export default ({ title, visible, handleOk, handleCancel, obj={} }) => {

  return (
    <CommonModal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      width='600px'
    >
     <ExpressComponent />
    </CommonModal>
  )
}