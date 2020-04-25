/**
 * 用户展示列表
 */

import React from 'react';
import CommonModal from '@/components/CommonModal';
import UserList from '../../components/UserList';

export default ({ data, handleTabChange, handleDelete, handleAdd }) => {

  return (
    <CommonModal>
      <UserList data={[]} handleAdd={handleAdd} handleDelete={handleDelete} handleTabChange={handleTabChange} />
    </CommonModal>
  )
}