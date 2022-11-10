import logo from "./logo.svg";
import axios from "axios";
import ApiConfigs from "./components/Api/ApiConfigurations";
import "./App.css";
import HeaderTemplate from "./components/Header/Header";
import MovieTemplate from "./components/MovieCard/MovieCard";
import StaticData from "./components/MovieCard/StaticData";
import MoviesApi from "./components/Api/MovieApi";
import React, { useState, useEffect } from "react";

const api = axios.create({
  baseURL: ApiConfigs.baseURL,
});

function App() {
  const [getMovies, setMovies] = useState([]);
  useEffect(() => {
    api
      .get("discover/movie?api_key=" + ApiConfigs.apiKey + "&page=1")
      .then((movies) => {
        setMovies(movies.data.results);
      }, []);
  });

  return (
    <div className="App">
      <HeaderTemplate></HeaderTemplate>
      <section class="hero-section">
        <div class="card-grid">
          {getMovies.map((movie) => (
            <MovieTemplate
              movies={movie}
              favourite={"favourite"}
            ></MovieTemplate>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
