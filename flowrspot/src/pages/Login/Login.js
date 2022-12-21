import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <h1 className={styles.header}>Welcome Back</h1>
      <div className={styles.data}>
        <input placeholder="Email Adress" />
        <input type="password" placeholder="Password" />
      </div>
      <div className={styles["login-button"]}>
        <button className={styles.button}>Login to your Account</button>
      </div>
      <div className={styles["close-login"]}>I dont want to Login</div>
    </div>
  );
};

export default Login;