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

  const googleSignIn = async (setLoading) => {
    setLoading(true)

    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const anonymousSignIn = async (setLoading) => {
    setLoading(true)

    try {
      await signInAnonymously(auth);
      setLoading(false)
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
