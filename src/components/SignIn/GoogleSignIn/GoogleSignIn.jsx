import React from "react";
import styles from "../SignIn.module.css";
import google from '../../../assets/google-logo.png'

import { UserAuth } from "../../../context/AuthContext";

function GoogleSignIn() {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button className={styles.Button} onClick={handleGoogleSignIn}>
        <img src={google} alt="google" />
        Sign In With Google
      </button>
    </>
  );
}

export default GoogleSignIn;
