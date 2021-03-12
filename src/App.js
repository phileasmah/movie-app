// import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import MovieList from "./components/movie-main";
import LoginPage from "./components/login-page";
import RegisterPage from "./components/register-page";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <br />
        <Route path="/" exact component={MovieList} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
