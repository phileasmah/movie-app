import React, { useState, useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";

const MovieResult = ({ movieName, movieId }) => {
  const [nudity, setNudity] = useState(null); //getting list of nudity warnings from imdb's website
  const [loading, setLoading] = useState(null);//shows loading 

  //sets nudity warnings to empty array everytime the user inputs a new movie
  useEffect(() => {
    setNudity([]);
  }, [movieName])

  // generates list of nudity warnings taken from imdb's website everytime a new movie is picked 
  useEffect(() => {
    const getParentalGuide = async (movieId) => {
      try {
        //uses my own heroku proxy, set up using the CORS-anywhere repo to prevent CORS error
        const url = "https://lit-bastion-90694.herokuapp.com/https://m.imdb.com/title/"+movieId+"/parentalguide/nudity"
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const temp_nudity = [];

        // desktop: "section#advisory-nudity > ul > li.ipl-zebra-list__item"
        //mobile: "section#advisory > ul > li.ipl-content-list__item"

        $("section#advisory > ul > li.ipl-content-list__item").each((_idx, el) => {
          const warning = $(el).text();
          temp_nudity.push(warning);
        });
        setNudity(temp_nudity);
        setLoading(true);

      } catch (error) {
        console.log(error);
        throw error;
      }
    }
    getParentalGuide(movieId);
  }, [movieId])


  return (
    <div>
    {loading ? 
      <div>
      <h4>{movieName}</h4>
      <h5>Sexual Content [{nudity[0]}]</h5>
      <ul>
        {nudity.slice(1).map((warning, i) => (
          <li key={i} >
            {warning}
          </li>
        ))}
      </ul>
    </div>
    :<div>Loading...</div>}
    </div>
  )
}

export default MovieResult;