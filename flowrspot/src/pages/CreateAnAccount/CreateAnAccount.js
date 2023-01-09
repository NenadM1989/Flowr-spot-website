import React from "react";
import styles from "./CreateAnAccount.module.css";

const CreateAnAccount = ({ func }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Create an Account</h1>
      <div className={styles.names}>
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
      </div>
      <div className={styles.column}>
        <input
          placeholder="Date of Birth"
          type="date"
          className={styles.date}
        />
        <input placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button className={styles.button}>Create Account</button>
      </div>
      <div
        onClick={() => {
          func(false);
        }}
        className={styles.close}
      >
        I dont want to register
      </div>
    </div>
  );
};

export default CreateAnAccount;
