import Style from '../MovieCard/MovieCard.css';


function MovieTemplate(props){ 
    const data = props.movies.backdrop_path
    const img = "http://image.tmdb.org/t/p/w500/"+`${data}`
    const img1 = "url('"+`${img}`+"')"
    console.log(props.movies);

    return(
        
            <a class="card" href="#">
                <div class="card__background" style={{backgroundImage:`${img1}`}}></div>
                <div class="card__content">
                    <p class="card__category">{props.movies.release_date}</p>
                    <h3 class="card__heading">{props.movies.original_title}</h3>
                </div>
            </a>
      
    )
}

export default MovieTemplate;