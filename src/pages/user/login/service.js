import { stringify } from 'qs';
import request from '@/utils/request';
import { getCaptchaKey } from '@/utils/authority';
import func from '@/utils/Func';

// =====================用户===========================

//账号登陆
export async function accountLogin(params) {
  const values = params;
  values.grant_type = 'captcha';
  values.scope = 'all';
  return request('/api/blade-auth/oauth/token', {
    headers: {
      'Tenant-Id': values.tenantId,
      'Captcha-key': getCaptchaKey(),
      'Captcha-code': values.code,
    },
    method: 'POST',
    body: func.toFormData(values),
  });
}

//获取图片验证码
export async function getCaptchaImage() {
  return request('/api/blade-auth/oauth/captcha');
}

export async function getRoutes() {
  return request(`/api/blade-system/menu/routes`);
}