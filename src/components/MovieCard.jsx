
import css from "./MovieCard.module.css"

const MovieCard=({image})=>{
   
    return (
        <div className={css.posterContainer}>
           {image.map((movies)=><img key={movies.id} className={css.Poster} src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}.jpg`}/>)}
           </div>
    );
}
export default MovieCard;