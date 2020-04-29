import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, HomeOutlined, MailTwoTone } from '@ant-design/icons';
import styles from './index.less';
import { useState, useEffect } from 'react';
import { getCaptchaImage } from '../service';
import { setCaptchaKey } from '@/utils/authority';

export default ({ dispatch }) => {

  const onFinish = values => {
    dispatch({
      type: '_login/login',
      payload: {
        ...values
      }
    })
  };

  const [img, setImg ] = useState('')

  const getImgCaptcha = () => {
    getCaptchaImage().then(res => {
      console.log(res, 'res')
      if (res.key) {
        setImg(res.image);
        setCaptchaKey(res.key);
      }
    });
  }

  useEffect(() => {
    getImgCaptcha()
  }, [])

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{ width: '100%' }}
    >
      <Form.Item
        name="tenantId"
        rules={[{ required: true, message: '请输入租户id' }]}
      >
        <Input size="large" prefix={<HomeOutlined className={styles.prefixIcon} />} placeholder="租户id：000000" />
      </Form.Item>
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input size="large" prefix={<UserOutlined className={styles.prefixIcon} />} placeholder="用户名：admin" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input
          prefix={<LockOutlined className={styles.prefixIcon} />}
          type="password"
          size="large"
          placeholder="Password"
        />
      </Form.Item>
      <Row gutter={8}>
        <Col span={16}>
          <Form.Item 
            name="code" 
            rules={[{ required: true, message: '请输入验证码' }]}
          >
            <Input size="large" prefix={<MailTwoTone className={styles.prefixIcon} />} placeholder="请输入验证码！" />
          </Form.Item>
        </Col>
        <Col span={8}>
          { img && <img alt="captcha" src={img} className={styles.getImgCaptcha} onClick={getImgCaptcha} /> }
        </Col>
      </Row>

      <Form.Item name="remember" valuePropName="checked">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Checkbox>记住我</Checkbox>
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
        </div>
      </Form.Item>
      <Form.Item >
        <Button size="large" style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

