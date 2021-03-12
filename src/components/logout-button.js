import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

const LogoutButton = () => {
  const { setUser } = useContext(UserContext);

  const logout = () => {
    axios({
      method: "GET",
      url: "http://localhost:4000/logout",
      withCredentials: true
    }).then((res) => {setUser(null);});
  };

  return (
    <button className="btn btn-danger btn-block" onClick={() => logout()}>
      Log Out
    </button>
  );
};

export default LogoutButton;
