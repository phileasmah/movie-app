import React from "react";

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