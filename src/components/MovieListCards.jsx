import MovieCard from "./MovieCard";
import css from "./MovieListCards.module.css";
const MovieListCards=({title, movieType})=>{
    return (
        <div className={css.container}>
            <h4>{title}</h4>
           {movieType&&<MovieCard image={movieType}/>}
        </div>
    );
}
export default MovieListCards;