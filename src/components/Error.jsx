import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    return(
        <div>
            Game
            <p>{err.status} : {err.statusText}</p>
            </div>
        
    );
}
export default Error;