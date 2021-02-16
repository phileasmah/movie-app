import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import MovieList from "./components/movie-list";
import CreateMovie from "./components/create-movie";


function App() {
  return (
    <Router>
        <div className="container"> 
        <Navbar /> 
        <br/> 
        <Route path="/" exact component={MovieList} />
        <Route path="/add" exact component={CreateMovie} />
        </div>
    </Router>
    
  );
}

export default App;
