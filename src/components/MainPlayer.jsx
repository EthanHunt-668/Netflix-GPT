import { useSelector } from "react-redux";
import css from "./MainPlayer.module.css";
import NowPlaying from "./nowPlaying";

const MainPlayer=()=>{
    const movie=useSelector(store=>store.movies.playing)
    if (!movie) return;

const {original_title,overview,id}=movie[0];
  
  


    return (<>
        <div className={css.movieTitleContainer}>
            <div>
                <h2 className={css.title}>{original_title}</h2>
                <p>{overview}</p>
            </div>
            <div className={css.buttonContainer}>
                <button>Play</button>
                <button>More info</button>
            </div>
        </div>
        <NowPlaying id={id}/>
        </>
    );
}
export default MainPlayer;