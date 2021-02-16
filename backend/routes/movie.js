const router = require('express').Router();
const fetch = require("node-fetch");
let Movie = require('../models/movie.model');

router.route('/').get((req, res) => {
    Movie.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const imdbId = req.body.imdbId;
    
    // to get movie details
    const getMovieDetails = async (imdbId) => {
        const response = await fetch(`http://www.omdbapi.com/?i=${imdbId}&apikey=7b960706`);
        const data = await response.json();
        return data;
    }

    //filling out data from OMDB 
    getMovieDetails(imdbId).then((data) => {
        if (data.Response === "True") {
            const title = data.Title; 
            const director = data.Director;
            const rated = data.Rated;
            const released = data.Released;
        
            const newMovie = new Movie({
                imdbId,
                title,
                director,
                rated,
                released
            });
        
            newMovie.save()
                .then(() => res.json(`${title} added!`))
                .catch(err => res.status(400).json("Error: " + err));   
        } else {
            res.status(400).json("Wrong imdb code");
        } 
    })
});

router.route("/:id").get((req, res) => {
    Movie.findById(req.params.id)
        .then(movie => res.json(movie))
        .catch(err => res.status(400).json("Error: " + err));
});


router.route("/:id").delete((req, res) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(() => res.json("Movie deleted"))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Movie.findById(req.params.id)
        .then(movie => {
            const data = {
                dateAdded: Date.parse(req.body.sexualContent.date),
                timeStamp: req.body.sexualContent.timeStamp,
                comment: req.body.sexualContent.comment
            };
            movie.sexualContent.push(data);

            movie.save()
                .then(() => res.json("Movie sexual content added!"))
                .catch(err => res.status(400).json("Error: " + err));
        })
        .catch(err => res.status(400).json("Error: " + err));
});


module.exports = router;