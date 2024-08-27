import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../Utils/CONSTANTS";
import css from "./nowPlaying.module.css"
import { useEffect } from "react";
import { clickedKey } from "../Utils/movieSlice";

const TrailerPlayer = () => {
  const dispatch = useDispatch();
  const id=useSelector(store=>store.movies.clickedVideo);
  const key = useSelector((store) => store.movies.clickedVideo);
  const video = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      OPTIONS
    );

    const { results } = await data.json();
    for (let i = 0; i < results.length; i++) {
      if (results[i].type == "Trailer") {
        dispatch(clickedKey(results[i].key));
        break;
      } else {
        dispatch(clickedKey(results[0].key));
      }
    }
  };
  useEffect(() => {
    video();
  }, []);

  return (
    <div>
      <iframe
        className={css.mainVideo}
        src={`https://www.youtube.com/embed/${key}?loop=1&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="autoplay"
      ></iframe>
    </div>
  );
};
export default TrailerPlayer;
