import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthNav from "./auth-nav";



const Navbar = (props) => {

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container">
      <Link to="/" className="navbar-brand">Movies</Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/add" className="nav-link">Add Movie</Link>
          </li>
        </ul>
        <AuthNav />
      </div>
      </div>
    </nav>
  )
}

export default Navbar;
