import React, { useState } from "react";
import Button from "../Button";

import styles from "./SignIn.module.css";
import Anonymous from "../../assets/anonymous.png";
import Google from "../../assets/google-logo.png";

import { UserAuth } from "../../context/AuthContext";
import Loading from "../Loading/Loading";

function SignIn() {
  const { googleSignIn, anonymousSignIn } = UserAuth();

  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.Container} style={loading ? {transition: ".25s", opacity: "0.25"} : {}}>
      <h1>Chat App</h1>

      <Button
        img={Google}
        text="Continue with Google"
        onClick={() => googleSignIn(setLoading)}
      />
      <Button
        img={Anonymous}
        text="Sign In Anonymously"
        onClick={() => anonymousSignIn(setLoading)}
      />

    </div>
  );
}

export default SignIn;
