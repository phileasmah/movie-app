import React, { useState } from "react";
import MovieSearch from "./movie-search";
import MovieResult from "./movie-result";
import axios from "axios";

const MovieList = () => {
  const [movieId, setMovieId] = useState("");
  const [movieInput, setMovieInput] = useState("");
  const [movieMessage, setMovieMessage] = useState("");
  const [movieQuery, setMovieQuery] = useState([]);
  const [movieName, setMovieName] = useState("");


  async function findMovie(e) {
    const searchString = "http://www.omdbapi.com/?s=" + e.trim().replace(/ /g, "+") + "&apikey=7b960706";
    let res = await axios.get(searchString);
    console.log(res);
    if (res.data.Response === "True") {
      setMovieQuery(res.data.Search);
    } else {
      setMovieInput("");
      setMovieMessage("Cant find movie");
      setMovieQuery([]);
    }
  }
  return (
    <div className="container">
      <h3>Search a movie</h3>
      <div className="form-group">
        <label>Search by name:</label>
        <input type="text"
          className="form-control"
          value={movieInput}
          onChange={e => setMovieInput(e.target.value)}
          placeholder={movieMessage}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              findMovie(movieInput);
            }
          }}
        />
      </div>
      <div className="form-group">
        <input type="button" onClick={() => findMovie(movieInput)} value="Search Movie" className="btn btn-primary" />
        <input type="button"
          onClick={() => {
            setMovieId("");
            setMovieQuery([]);
            setMovieInput("");
          }}
          value="Clear" className="btn btn-secondary" style={{ marginLeft: "1em" }}
        />
      </div>
      {movieQuery.map(movie => (
        <MovieSearch key={movie.imdbID} movie={movie} setMovieId={setMovieId} setMovieQuery={setMovieQuery} setMovieName={setMovieName} setMovieInput={setMovieInput}/>
      ))}
      {movieId ? <MovieResult movieName={movieName} movieId={movieId} /> : <div></div>}
    </div>
  )
}

export default MovieList;
