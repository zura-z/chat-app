import React from "react";
import { UserAuth } from "../../context/AuthContext";

function LogOutButton() {
  const { logOut } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={handleLogOut}>Log Out</button>;
}

export default LogOutButton;
