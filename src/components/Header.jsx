import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <a className="btn btn-ghost normal-case text-2xl">D&D Production</a>
      <Link className="btn btn-ghost normal-case" to={"/login"}>
        Login
      </Link>
      <Link className="btn btn-ghost normal-case" to={"/register"}>
        Register
      </Link>
    </div>
  );
};

export default Header;
