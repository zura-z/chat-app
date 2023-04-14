import React from "react";
import { UserAuth } from "../../context/AuthContext";

import styles from './LogOut.module.css'

function LogOutButton() {
  const { logOut } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return <button className={styles.LogOutButton} onClick={handleLogOut}>Log Out</button>;
}

export default LogOutButton;
