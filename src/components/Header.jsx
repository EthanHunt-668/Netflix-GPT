import css from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={`${css.Header}`}>
      <div className={css.leftButtons}>
        <img
          className={css.ProjectLogo}
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="app logo"
        />
      </div>
    </div>
  );
};
export default Header;
