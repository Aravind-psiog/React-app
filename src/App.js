import logo from "./logo.svg";
import axios from "axios";
import ApiConfigs from "./components/Api/ApiConfigurations";
import "./App.css";
import HeaderTemplate from "./components/Header/Header";
import MovieTemplate from "./components/MovieCard/MovieCard";
import StaticData from "./components/MovieCard/StaticData";
import MoviesApi from "./components/Api/MovieApi";
import SearchBarTemplate from "./components/SearchBar/SearchBar";
import React, { useState, useEffect } from "react";

const api = axios.create({
  baseURL: ApiConfigs.baseURL,
});
// MoviesApi();

// console.log(MoviesApi());

function App() {
  return (
    <div className="App">
      <HeaderTemplate></HeaderTemplate>
      <SearchBarTemplate />
      <section className="hero-section">
        <div className="card-grid">
          {MoviesApi().map((movie) => (
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
