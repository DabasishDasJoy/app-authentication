import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContex";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Home Of {user?.email}</h1>
    </div>
  );
};

export default Home;
