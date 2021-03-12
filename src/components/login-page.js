import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

const LoginPage = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/");
      console.log(user);
    }
  })

  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setUser(res.data);
    });
  };

  const login = () => {
    axios({
      method: "POST",
      data: {
        username: username,
        password: password
      },
      url: "http://localhost:4000/login",
      withCredentials: true
    }).then((res) => {getUser(); history.push("/");});
  };

  return (
    <div className="container justify-content-center">
      <h3>Login</h3>
      <form>
        <div className="form-group">
          <input className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input className="form-control"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" onClick={e => {e.preventDefault(); login(username, password)}} value="Login" className="btn btn-primary" />
        </div>
      </form>
      <Link to="/register">Create an account</Link>
      <input type="button" value="get" onClick={getUser} />
    </div>
  )
}

export default LoginPage;