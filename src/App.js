// import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import MovieList from "./components/movie-main";
import LoginPage from "./components/login-page";
import RegisterPage from "./components/register-page";


function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={MovieList} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/register" exact component={RegisterPage} />
    </Router>
  );
}

export default App;
