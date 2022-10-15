import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../hooks/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContex = ({ children }) => {
  const [user, setUser] = useState({ displayName: "akash" });

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = { user, createUser, signInUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContex;
