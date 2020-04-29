
import { connect } from 'umi';
import styles from './index.less';
import Account from './component/Account';

const Login = ({ dispatch }) => {

  return (
    <div className={styles.main}>
      <Account dispatch={dispatch} />
    </div>
    
  );
};

export default connect(({ newLogin, loading }) =>({
  login: newLogin,
  loading: loading.global
}))(Login)