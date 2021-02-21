import React, { useState, useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";

const MovieResult = ({ movieName, movieId }) => {
  const [nudity, setNudity] = useState([]);

  useEffect(() => {
    const getParentalGuide = async (movieId) => {
      try {
        // const { data } = await axios.get(
        //   "https://cors-anywhere.herokuapp.com/https://www.imdb.com/title/"+movieId+"/parentalguide"
        // );
        // const $ = cheerio.load(data);
        // const temp_nudity = [];

        // $("section#advisory-nudity > ul > li.ipl-zebra-list__item").each((_idx, el) => {
        //   const warning = $(el).text()
        //   temp_nudity.push(warning.trim())
        // });
        const temp_nudity = ["A couple is staying together in a hotel room, but the scene set there is brief. When the couple are attacked while taking a walk, one says to the other, dryly, that they should have stayed in bed", "Star Lord makes a reference to attaching a grenade to someones junk"]
        setNudity(temp_nudity);

      } catch (error) {
        console.log(error)
        throw error;
      }
    }
    getParentalGuide(movieId);
  })


  return (
    <div>
      <h4>{movieName}</h4>
      <h5>Sexual Content</h5>
      <ul>
        {nudity.map(warning => (
          <li>
            {warning}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieResult;