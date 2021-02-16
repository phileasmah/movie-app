import React, {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

    const [movies, setMovies] = useState([]);

    const getMovies = () => {
        setMovies()
    }

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Movies</Link>
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/add" className="nav-link">Add Movie</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
