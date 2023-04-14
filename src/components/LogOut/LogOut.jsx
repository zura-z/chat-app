import React from "react";
import styles from './LogOut.module.css'

import ChatRoom from "./ChatRoom";
import LogOutButton from "./LogOutButton";

import { UserAuth } from "../../context/AuthContext";



function LogOut() {
  const { user } = UserAuth();

  return (
    <>
      <ChatRoom />

      <div className={styles.Container}>
        <h5>Welcome, {user.displayName || "Anonymous"}</h5>
        <LogOutButton />
      </div>
    </>
  );
}

export default LogOut;
