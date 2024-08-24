import useMoviesCall from "../hooks/useMoviesCall";

import MainPlayer from "./MainPlayer";
import MovieListCards from "./MovieListCards";
const Browse=()=>{

    useMoviesCall();

    return (<div >
      <MainPlayer/>
      <MovieListCards/>
    </div>);
}

export default Browse;