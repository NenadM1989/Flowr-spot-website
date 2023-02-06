import React, { useState } from "react";
import styles from "./Login.module.css";
import Modal from "../../components/Modal/Modal";
import { AuthService } from "../../authService/authService";
import { validEmail, validPassword } from "../../Regex";

const Login = ({ funct, funcLog }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validEmail.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }
    if (!validPassword.test(password)) {
      setErrorMessage("Password form is incorrect!");
      return;
    }

    try {
      const res = await AuthService.postLogin({ email, password });
      localStorage.setItem("auth_token", res.data.auth_token);
      console.log("Success!", res.data.auth_token);
      funcLog(true);
    } catch (err) {
      console.log("Error occurred!", err);
    }

    setEmail(""), setPassword("");
    setShowLogin(false);
    window.location.reload(false);
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
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && (
              <p className={styles.errorMessage}>{errorMessage}</p>
            )}
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
