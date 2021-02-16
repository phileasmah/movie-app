import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Movie = props => (
    <tr>
      <td>{props.movie.title}</td>
      <td>{props.movie.director}</td>
      <td>{props.movie.rated}</td>
      <td>{props.movie.released}</td>
      <td>
        <a href="#" onClick={() => { props.deleteMovie(props.movie._id) }}>delete</a>
      </td>
    </tr>
  )


const MovieList = () => {
    const [movie, setMovies] = useState({movies: []});

    useEffect(() => {
        axios.get("http://localhost:5000/movie")
        .then(response => {
            setMovies({movies: response.data})
        })
        .catch(err => {console.log(err)})
    })  

    function deleteMovie(id) {
        axios.delete("http://localhost:5000/movie/"+id)
        .then(res => console.log(res.data));

        setMovies({
            movies: movie.movies.filter(el => el._id !== id)
        })
    }

    function movieList() {
        return movie.movies.map(currentmovie => {
            return <Movie movie={currentmovie} deleteMovie={deleteMovie} key={currentmovie._id}/>
        })
    }

    return (
        <div>
        <h3>Movie List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Directors</th>
              <th>Rated</th>
              <th>Released</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { movieList() }
          </tbody>
        </table>
      </div>
    )
}

export default MovieList;
