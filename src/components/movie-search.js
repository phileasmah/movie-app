import React from "react";

const MovieSearch = ({movie, setMovieId}) => {
    return (
        <div className="form-group">
            <input type="button" value={movie.Title + ", " + movie.Year} className="btn btn-secondary" onClick={() => setMovieId(movie.imdbID)}></input>
        </div>
    )
}

export default MovieSearch;