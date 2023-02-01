import React, { useState } from "react";
import styles from "./Login.module.css";
import Modal from "../../components/Modal/Modal";
import { AuthService } from "../../authService/authService";

const Login = ({ funct, funcLog }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await AuthService.postLogin({ email, password });
      localStorage.setItem("auth_token", res.auth_token);
      console.log("Success!");
      funcLog(true);
    } catch (err) {
      console.log("Error occurred!", err);
    }

    setEmail(""), setPassword("");
    setShowLogin(false);
  };

  return (
    showLogin && (
      <Modal>
        <form className={styles.login} onSubmit={handleSubmit}>
          <div className={styles.close} onClick={() => funct(false)}>
            X
          </div>
          <h1 className={styles.header}>Welcome Back</h1>
          <div className={styles.data}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles["login-button"]}>
            <button type="submit" className={styles.button}>
              Login to your Account
            </button>
          </div>
          <div
            className={styles["close-login"]}
            onClick={() => {
              funct(false);
            }}
          >
            I dont want to Login
          </div>
        </form>
      </Modal>
    )
  );
};

export default Login;
