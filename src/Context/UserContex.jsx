import React, { createContext } from "react";

const AuthContext = createContext();

const UserContex = ({ children }) => {
  const authInfo = {};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContex;
