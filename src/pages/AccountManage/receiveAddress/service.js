import request from '@/utils/request';
import { stringify } from 'qs';

//获取收货地址列表
export async function query(params) {
  return request(`/api/getAddressList?${stringify(params)}`);
}

//删除收货地址
export async function deleteAddress(params) {
  return request('/api/deleteAddress', {
    method: 'POST',
    data: params,
  });
}