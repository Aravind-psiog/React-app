import Style from "../MovieCard/MovieCard.css";
import { useState } from "react";

const MovieTemplate = (props) => {
  const [favourite, setFavourite] = useState(props.favourite);
  const buttonHandler = () => {
    if (favourite == "favourite") {
      setFavourite("added");
    } else {
      setFavourite("favourite");
    }
  };

  const data = props.movies.backdrop_path;
  const img = "http://image.tmdb.org/t/p/w500/" + `${data}`;
  const img1 = "url('" + `${img}` + "')";

  return (
    <a className="card">
      <div
        className="card__background"
        style={{ backgroundImage: `${img1}` }}
      ></div>
      <div className="card__content">
        <p className="card__category">{props.movies.release_date}</p>
        <h3 className="card__heading">{props.movies.original_title}</h3>
        <button onClick={buttonHandler}>{favourite}</button>
      </div>
    </a>
  );
};

export default MovieTemplate;
