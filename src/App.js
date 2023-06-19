import logo from "./logo.svg";
import {
  Typography,
  Card,
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
} from "@mui/material";
import axios from "axios";
import ApiConfigs from "./components/Api/ApiConfigurations";
import "./App.css";
import HeaderTemplate from "./components/Header/Header";
import MovieTemplate from "./components/MovieCard/MovieCard";
import StaticData from "./components/MovieCard/StaticData";
import MoviesApi from "./components/Api/MovieApi";
import SearchBarTemplate from "./components/SearchBar/SearchBar";
import React, { useState, useEffect } from "react";
import LocalMoviesRoundedIcon from "@mui/icons-material/LocalMoviesRounded";
import Button from "@mui/material/Button";

const api = axios.create({
  baseURL: ApiConfigs.baseURL,
});
// MoviesApi();

// console.log(MoviesApi());

function App() {
  return (
    <div className="App">
      <AppBar position="relative">
        <Toolbar>
          <LocalMoviesRoundedIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MMDB
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
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
