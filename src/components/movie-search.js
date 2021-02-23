import React from "react";

//returns all options generated from omdb's api call for user to select movie
const MovieSearch = ({movie, setMovieId, setMovieQuery, setMovieName, setMovieInput}) => {
    return (
        <div className="form-group">
            <input type="button" value={movie.Title + ", " + movie.Year} className="btn btn-secondary" 
              onClick={() => {
                setMovieId(movie.imdbID);
                setMovieName(movie.Title);
                setMovieQuery([]);
                setMovieInput("");
                }}>
            </input>
        </div>
    )
}

export default MovieSearch;