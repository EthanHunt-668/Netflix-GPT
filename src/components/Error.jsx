import css from "./Error.module.css";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <center className={css.body}>
      <div className={css.gameBox}>
        <div className={css.icon}>
            icon
        </div>
        <div className={css.background}>_________-----___________________-----___________________</div>
      </div>
      <p>
        {err.status} : {err.statusText}
      </p>
    </center>
  );
};
export default Error;
