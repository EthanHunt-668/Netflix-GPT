import { useDispatch } from "react-redux";
import { OPTIONS } from "../Utils/CONSTANTS";
import { addMovie } from "../Utils/movieSlice";

const useMoviesCall=()=>{
    const dispatch=useDispatch();
    
      
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', OPTIONS)
        .then(response => response.json())
        .then(response => dispatch(addMovie(response.results)))
        .catch(err => console.error(err));

}
export default useMoviesCall;