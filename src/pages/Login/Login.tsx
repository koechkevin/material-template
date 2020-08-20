import React from 'react';
import loginSVG from '../../images/login-page.svg';
import styles from './Login.module.scss';

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formsContainer}>
        <h3>Login</h3>
        <div className={styles.signinForm}>
          {/*<LoginForm />*/}
        </div>
      </div>

      <div className={styles.panelsContainer}>
        <div className={styles.panel}>
          <div className={styles.panelsContent}>
            <h3 className={styles.h3}>App Name</h3>
            <p className={styles.p}>Some Description</p>
          </div>
          <img src={loginSVG} className={styles.image} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Login;
