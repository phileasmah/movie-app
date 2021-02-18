import React, { useState } from "react";
import axios from "axios";
import cheerio from "cheerio";

const MovieResult = ({movieName, movieId}) => {

  const [nudity, setNudity] = useState([]);

  const getParentalGuide = async(movieId) => {
    try {
      const { data } = await axios.get(
        "https://www.imdb.com/title/"+movieId+"/parentalguide"
      );
      const $ = cheerio.load(data);
      const nudity = [];

      $("div > section#advisory-nudity > ul > li").each((_idx, el) => {
        const warning = $(el).text()
        nudity.push(warning)
      });

      return nudity;
    } catch (error) {
      console.log(error)
      throw error; 
    }
  }
  getParentalGuide("tt4154756").then(title => console.log(title))
  
  

  return(
    <div>
      <div>{movieName}</div>
    </div>
  )
}

export default MovieResult;