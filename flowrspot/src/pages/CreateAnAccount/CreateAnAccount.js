import React, { useState } from "react";
import styles from "./CreateAnAccount.module.css";
import Modal from "../../components/Modal/Modal";
import { AuthService } from "../../authService/authService";

const CreateAnAccount = ({ func }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showCreateAcc, setShowCreateAcc] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      date_of_birth: date,
    };
    try {
      const response = await AuthService.postRegister(data);
      localStorage.setItem("token", response.data.auth_token);
      console.log(response.data.auth_token);
    } catch (err) {
      console.log("Error occurred");
    }

    setFirstName(""),
      setLastName(""),
      setDate(""),
      setEmail(""),
      setPassword("");
    setShowCreateAcc(false);
  };

  return (
    showCreateAcc && (
      <Modal>
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
              placeholder="date of birth"
              className={styles.date}
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            ></input>
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
      </Modal>
    )
  );
};

export default CreateAnAccount;
