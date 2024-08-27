import { useDispatch } from "react-redux";
import { OPTIONS } from "../Utils/CONSTANTS";
import {
  addMovie,
  addPopularMovie,
  addTopRated,
  addUpcoming,
} from "../Utils/movieSlice";
import { useEffect } from "react";

const useMoviesCall = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addMovie(response.results)))
      .catch((err) => console.error(err));
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addPopularMovie(response.results)))
      .catch((err) => console.error(err));
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addTopRated(response.results)))
      .catch((err) => console.error(err));
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addUpcoming(response.results)))
      .catch((err) => console.error(err));
  }, []);
};
export default useMoviesCall;
