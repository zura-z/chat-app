import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  signInAnonymously,
} from "firebase/auth";

import { auth } from "../firebase/config";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const anonymousSignIn = async () => {
    try {
      await signInAnonymously(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, anonymousSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => useContext(AuthContext);
