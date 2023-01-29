import React, { useState } from "react";
import styles from "./CreateAnAccount.module.css";

const CreateAnAccount = ({ func }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    localStorage.setItem("user", JSON.stringify(user));

    setFirstName(""), setLastName(""), setEmail(""), setPassword("");
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <h1 className={styles.header}>Create an Account</h1>
        <div className={styles.names}>
          <input
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={styles.column}>
          <input
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.button}>
            Create Account
          </button>
        </div>
        <div
          onClick={() => {
            func(false);
          }}
          className={styles.close}
        >
          I dont want to register
        </div>
      </form>
    </>
  );
};

export default CreateAnAccount;
