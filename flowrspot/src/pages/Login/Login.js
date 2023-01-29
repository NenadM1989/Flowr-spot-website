import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = ({ funct }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser.email === email && storedUser.password === password) {
      console.log(email, password);
    } else {
      console.log("Error occurred!");
    }
  };
  return (
    <>
      <form className={styles.login} onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className={styles.button}
            //onClick={() => {
            //            }}
          >
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
    </>
  );
};

export default Login;
