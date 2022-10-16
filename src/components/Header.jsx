import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContex";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then()
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar bg-primary text-primary-content">
      <Link to={"/home"} className="btn btn-ghost normal-case text-2xl">
        D&D Production
      </Link>
      <Link className="btn btn-ghost normal-case" to={"/login"}>
        Login
      </Link>
      <Link className="btn btn-ghost normal-case" to={"/register"}>
        Register
      </Link>
      <Link className="btn btn-ghost normal-case" to={"/orders"}>
        Orders
      </Link>
      <p>{user?.email}</p>
      {user ? (
        <button onClick={handleSignOut} className="btn btn-sm">
          Sign Out
        </button>
      ) : (
        <Link to={"/login"} className="btn btn-sm">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Header;
