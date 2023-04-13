import React from "react";
import { UserAuth } from "./context/AuthContext";

function App() {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div onClick={handleGoogleSignIn} className="App">
      Chat App
    </div>
  );
}

export default App;
