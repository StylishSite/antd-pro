
import React from 'react';

import Img from '@/assets/logo.svg'
import styles from './index.less';

export default ({}) => {
  return (
    <div>
      <h5>我的账户</h5>
      <div>
        <div>
          <span>账户余额</span>
          <span>2346603</span>
        </div>
        <div>
          <span>提现</span>
          <span>充值</span>
        </div>
      </div>
      <div>
        <span>冻结金额</span>
        <span>23660</span>
      </div>
      <div>
        <div>
          <span>3</span>
          <span>优惠券</span>
        </div>
        <div>
          <span>325</span>
          <span>可用积分</span>
        </div><div>
          <span>1200</span>
          <span>充值卡</span>
        </div>
      </div>
      <div>
        <div className={styles.wrapBottom}>
          <img className={styles.img} src={Img} />
          <div className={styles.goods}>
            <span>手机绑定</span>
            <span style={{ color: '#000' }}>未绑定</span>
          </div>
          <span style={{ color: '#108ee9', cursor: 'pointer' }}>去绑定</span>
        </div>
        <div className={styles.wrapBottom}>
          <img className={styles.img} src={Img} />
          <div className={styles.goods}>
            <span>身份认证</span>
            <span style={{ color: '#000' }}>已认证</span>
          </div>
          <span style={{ color: '#108ee9', cursor: 'pointer' }}>查看</span>
        </div>
      </div>
    </div>
  )
}