import React, { useContext } from "react";
import { UserContext } from "../UserContext";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";


const AuthenticationButton = () => {
  const { user } = useContext(UserContext);

  return user ? <LogoutButton />: <LoginButton />;
};

export default AuthenticationButton;