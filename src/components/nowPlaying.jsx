import { useEffect } from "react";
import { OPTIONS } from "../Utils/CONSTANTS";
import { useDispatch, useSelector } from "react-redux";
import { movieKey } from "../Utils/movieSlice";
import css from "./nowPlaying.module.css"
const NowPlaying = ({ id }) => {
  const dispatch = useDispatch();
  const key=useSelector(store=>store.movies.playVideo);
  const video = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      OPTIONS
    );

    const { results } = await data.json();
    for (let i = 0; i < results.length; i++) {
      if(results[i].type == "Trailer") {dispatch(movieKey(results[i].key))
        break;
      }
      else{dispatch(movieKey(results[0].key));}
    }
  };
  useEffect(() => {
    video();
  }, []);
  return (<div className="bg-black">
    <iframe className={css.mainVideo}
      src={`https://www.youtube.com/embed/${key}?loop=1&autoplay=1&mute=1&disablekb=1&controls=0`}
      title="YouTube video player"
      allow="autoplay"
    ></iframe></div>
  );
};
export default NowPlaying;
