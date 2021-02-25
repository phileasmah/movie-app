import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const RegisterPage = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: username,
        password: password
      },
      url: "http://localhost:4000/register",
      withCredentials: true
    }).then((res) => console.log(res));
  };

  return (
    <div className="container justify-content-center">
      <h3>Register</h3>
      <div className="form-group">
        <input className="form-control"
          placeholder="Enter username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <Link to="/login" onClick={register}>
          <input type="button" value="Register" className="btn btn-primary"/>
        </Link>
      </div>
    </div>
  )
}

export default RegisterPage;