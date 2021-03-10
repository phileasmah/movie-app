import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
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
    }).then((res) => console.log(res));
  };

  return (
    <div className="container justify-content-center">
      <h3>Login</h3>
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
        <input type="button" onClick={login} value="Login" className="btn btn-primary" />
      </div>
      <Link to="/register">Create an account</Link>
      <input type="button" value="get" onClick={getUser} /> 
    </div>
  )
}

export default LoginPage;