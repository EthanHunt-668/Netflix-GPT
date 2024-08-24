import css from "./body.module.css";
import Login from "./login";

const Body = () => {
 
  return (
    <div className={css.body}>
      <Login />
    </div>
  );
};
export default Body;
