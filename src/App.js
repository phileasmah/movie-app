// import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "@auth0/auth0-react";

import Navbar from "./components/navbar";
import MovieList from "./components/movie-list";
import CreateMovie from "./components/create-movie";
import LoadingMain from "./components/loading-main";



function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingMain />
  }

  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={MovieList} />
      <Route path="/add" exact component={CreateMovie} />
    </Router>

  );
}

export default App;
