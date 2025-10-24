import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config"
import { createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  }

  const logOut = () => {
    return signOut(auth);
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })

    return () => {
      unsubscribe();
    }

  },[]);


  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading, 
    setLoading,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
