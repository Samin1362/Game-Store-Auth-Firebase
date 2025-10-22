import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Samin Israk",
    email: "samin.israk@northsouth.edu",
  });

  const authData = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
