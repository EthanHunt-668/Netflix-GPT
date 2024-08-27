import { useSelector } from "react-redux";
import useMoviesCall from "../hooks/useMoviesCall";
import css from "./browse.module.css";
import MainPlayer from "./MainPlayer";
import MovieListCards from "./MovieListCards";
const Browse = () => {
  useMoviesCall();

  const movies = useSelector((store) => store.movies);

  return (
    <div>
      <MainPlayer />
      <div className={css.outerDiv}>
        <div className={css.innerDiv}>
          <MovieListCards title={"Now Playing"} movieType={movies.playing} />
          <MovieListCards
            title={"Popular Movies"}
            movieType={movies.popularMovies}
          />
          <MovieListCards
            title={"Top Rated Movies"}
            movieType={movies.topRated}
          />
          <MovieListCards
            title={"Upcoming Movies"}
            movieType={movies.upcoming}
          />
        </div>
      </div>
    </div>
  );
};

export default Browse;
