import React, {useState} from "react";
import axios from "axios";
import MovieSearch from "./movie-search";

const CreateMovie = (props) => {

    const [movieId, setMovieId] = useState("");
    const [movieName, setMovieName] = useState("");
    const [idMessage, setIdMessage] = useState("");
    const [movieMessage, setMovieMessage] = useState("");
    const [movieQuery, setMovieQuery] = useState([]);

    function onSubmit(e) {
        e.preventDefault();

        const movie = {
            imdbId: movieId
        }
        
        axios.post("http://localhost:5000/movie/add", movie)
        .then(res => {
            console.log(res.data)
            setIdMessage(res.data)
        })
        .catch(err => setIdMessage("Please try again"))

        setMovieId("");
    }

    async function findMovie(e){
        const searchString = "http://www.omdbapi.com/?s=" +e.trim().replace(/ /g,"+")+ "&apikey=7b960706";
        let res = await axios.get(searchString);
        console.log(res);
        if (res.data.Response === "True") {
            setMovieQuery(res.data.Search);
        } else {
            setMovieName("");
            setMovieMessage("Cant find movie");
            setMovieQuery([]);
        }
    }

    return (
        <div>
            <h3>Add a movie</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>IMDB id: </label>
                    <input type="text"
                        placeholder = {idMessage}
                        className="form-control"
                        value={movieId}
                        onChange={e => setMovieId(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Movie" className="btn btn-primary" />
                </div>
            </form>
            <div className = "form-group">
                <label>Search by name:</label>
                <input type="text"
                    className="form-control"
                    value={movieName}
                    onChange={e => setMovieName(e.target.value)}
                    placeholder = {movieMessage}
                    onKeyPress={(event) => {
                        if(event.key === "Enter"){
                            findMovie(movieName);
                        }
                    }}
                />
            </div>
            <div className="form-group">
                <input type="button" onClick={() => findMovie(movieName)} value="Search Movie" className="btn btn-primary"/>
            </div>
            {movieQuery.map(movie => (
                <MovieSearch key={movie.imdbID} movie={movie} setMovieId={setMovieId}/>
            ))}
        </div>
    )
}

export default CreateMovie;
