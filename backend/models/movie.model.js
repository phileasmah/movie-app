const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    imdbId: {type:String, required:true, unique: true},
    title: String, 
    director: String,
    rated: String,
    released: String,
    sexualContent: [{dateAdded: Date, timeStamp: String, comment: String}]
}, {
    timestamps: true
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;