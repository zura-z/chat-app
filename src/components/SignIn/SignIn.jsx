import React from "react";
import Button from "../Button";

import styles from "./SignIn.module.css";
import Anonymous from "../../assets/anonymous.png";
import Google from "../../assets/google-logo.png";

import { UserAuth } from "../../context/AuthContext";

function SignIn() {
  const { googleSignIn, anonymousSignIn } = UserAuth();

  return (
    <div className={styles.Container}>
      <h1>Chat App</h1>

      <Button img={Google} text="Continue with Google" onClick={googleSignIn} />
      <Button img={Anonymous} text="Sign In Anonymously" onClick={anonymousSignIn} />
    </div>
  );
}

export default SignIn;
