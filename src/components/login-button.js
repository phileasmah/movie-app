import React from "react";
import { Link } from "react-router-dom";


const LoginButton = () => {
  return (
    <Link to="/login">
      <button className="btn btn-primary btn-block">
        Login
      </button>
    </Link >
  );
};

export default LoginButton;
