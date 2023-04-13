import React from "react";

import SignIn from "./components/SignIn/SignIn";
import LogOut from "./components/LogOut/LogOut";

import { UserAuth } from './context/AuthContext'

function App() {
  const {user} = UserAuth();

  return (
    <div>
      
      {user ? <LogOut /> : <SignIn />}

    </div>
  );
}

export default App;
