import React, { useState, useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";

const MovieResult = ({movieName, movieId}) => {
  const [nudity, setNudity] = useState([]);

  useEffect(() => {
    const getParentalGuide = async(movieId) => {
      try {
        const { data } = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://www.imdb.com/title/"+movieId+"/parentalguide"
        );
        const $ = cheerio.load(data);
        const temp_nudity = [];
  
        $("section#advisory-nudity > ul > li.ipl-zebra-list__item").each((_idx, el) => {
          const warning = $(el).text()
          temp_nudity.push(warning.trim())
        });
  
        setNudity(temp_nudity);
  
      } catch (error) {
        console.log(error)
        throw error; 
      }
    }
    getParentalGuide(movieId);
  })


  return(
    <div>
      <h4>{movieName}</h4>
      {nudity.map(warning => (
        <div>
          {warning}
        </div>
      ))}
    </div>
  )
}

export default MovieResult;