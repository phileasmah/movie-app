import React, { useState } from "react";
import MovieSearch from "./movie-search";
import MovieResult from "./movie-result";
import axios from "axios";

const MovieList = () => {
  const [movieId, setMovieId] = useState("");   //for when finding movie id from omdb api call 
  const [movieInput, setMovieInput] = useState("");  //user input on what movie to find 
  const [movieMessage, setMovieMessage] = useState(""); //placeholder message for input field
  const [movieQuery, setMovieQuery] = useState([]); //list of results from omdb api call, where user selects 1 to get the id
  const [movieName, setMovieName] = useState(""); //name of the movie from omdb api

  // function for finding a movie by making an api call to omdb's api 
  async function findMovie(e) {
    const searchString = "https://www.omdbapi.com/?s=" + e.trim().replace(/ /g, "+") + "&apikey=7b960706";
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
              setMovieId("");
              findMovie(movieInput);
            }
          }}
        />
      </div>
      <div className="form-group">
        <input type="button" onClick={() => { setMovieId(""); findMovie(movieInput); }} value="Search Movie" className="btn btn-primary" />
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
        <MovieSearch key={movie.imdbID} movie={movie} setMovieId={setMovieId} setMovieQuery={setMovieQuery} setMovieName={setMovieName} setMovieInput={setMovieInput} />
      ))}
      {movieId ? <MovieResult movieName={movieName} movieId={movieId} /> : <div></div>}
    </div>
  )
}

export default MovieList;
