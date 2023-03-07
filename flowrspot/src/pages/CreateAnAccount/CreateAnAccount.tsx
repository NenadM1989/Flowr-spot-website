import React, { useState } from "react";
import styles from "./CreateAnAccount.module.css";
import Modal from "../../components/Modal/Modal";
import { AuthService } from "../../authService/authService";
import { validEmail, validPassword } from "../../Regex";
import { ICreateAnAccountProps } from "../../types/types";

const CreateAnAccount = ({ func }: ICreateAnAccountProps) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showCreateAcc, setShowCreateAcc] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (localStorage.getItem("token")) {
      setErrorMessage("User is already registred");
      setLastName(""), setDate(""), setEmail(""), setPassword("");
      return;
    }

    if (!validEmail.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }
    if (!validPassword.test(password)) {
      setErrorMessage("Password form is incorrect!");
      return;
    }

    const data = {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      date_of_birth: date,
    };
    try {
      const response = await AuthService.postRegister(data);
      console.log(response.data);
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
    window.location.reload();
  };

  return (
    showCreateAcc && (
      <Modal onClose={() => setShowCreateAcc(false)}>
        <form className={styles.container} onSubmit={handleSubmit}>
          <h1 className={styles.header}>Create an Account</h1>
          <div className={styles.names}>
            <input
              required
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.column}>
            <input
              required
              placeholder="date of birth"
              className={styles.date}
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            ></input>
            <input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && (
              <p className={styles.errorMessage}>{errorMessage}</p>
            )}
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
