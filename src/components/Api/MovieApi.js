import Api from "../AxiosAPI/ApiInitialiser";
import axios from "axios";
import ApiConfigs from "./ApiConfigurations";
import React, { useState, useEffect } from "react";

export default function DataFetch() {
  const [getMovies, setMovies] = useState([]);
  useEffect(() => {
    Api.get("discover/movie?api_key=" + ApiConfigs.apiKey + "&page=1").then(
      (movies) => {
        setMovies(movies.data.results);
        // return getMovies;
        // movie_list = movies.data.results
        console.log(getMovies, "im get movies");
      }
    );
  }, []);
  return getMovies;
}
