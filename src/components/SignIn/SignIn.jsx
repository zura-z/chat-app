import React from "react";
import GoogleSignIn from "./GoogleSignIn";

import styles from './SignIn.module.css'
import Anonymous from '../../assets/anonymous.png'

import { UserAuth } from "../../context/AuthContext";

function SignIn() {
  const { googleSignIn, anonymousSignIn } = UserAuth();
  
  return (
    <div className={styles.Container}>
      <h1>Chat App</h1>

      <GoogleSignIn />

      <button className={styles.Button} onClick={anonymousSignIn}>
        <img className="lightIMG" src={Anonymous} alt="Anonymous" />
        Sign In Anonymously
      </button>
    </div>
  );
}

export default SignIn;