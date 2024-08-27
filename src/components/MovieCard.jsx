import { useNavigate } from "react-router-dom";
import css from "./MovieCard.module.css";
import { useDispatch } from "react-redux";
import { clickedKey } from "../Utils/movieSlice";

const MovieCard = ({ image }) => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
  return (
    <div className={css.posterContainer}>
      {image.map((movies) => (
        <img
          key={movies.id}
          className={css.Poster}
          src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}.jpg`}
          onClick={()=>{dispatch(clickedKey(movies.id)); navigate("/Trailer");}}
        />
      ))}
    </div>
  );
};
export default MovieCard;
