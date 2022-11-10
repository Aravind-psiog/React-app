import axios from "axios";
import ApiConfigs from "./ApiConfigurations";
import React, { useState, useEffect } from "react";

const api = axios.create({
  baseURL: ApiConfigs.baseURL,
});
let movie_list = [];

const DataFetch = () => {
  const [getMovies, setMovies] = useState([]);
  useEffect(() => {
    api
      .get("discover/movie?api_key=" + ApiConfigs.apiKey + "&page=1")
      .then((movies) => {
        setMovies(movies.data.results);
        // return getMovies;
        // movie_list = movies.data.results
        console.log(getMovies);
      });
  }, []);
};

export default DataFetch;
