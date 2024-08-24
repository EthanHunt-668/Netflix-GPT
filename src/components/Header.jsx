import { useDispatch, useSelector } from "react-redux";
import css from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Utils/userSlice";
import { useEffect, useState } from "react";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sOut,setSOut]=useState(false);
  // const userName= useSelector((store)=>store.user.displayName);
  // console.log(userName);
  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        setSOut(true);
      } else {
        dispatch(removeUser());
        navigate("/");
        setSOut(false);
      }
    });
  }, []);

  const handleSignOut= ()=>{
    signOut(auth)
    .then(()=>{navigate("/")})
    .catch(()=>{
      navigate("/error")
    });
  };
  return (
    <div className={`${css.Header}`}>
      <div className={css.leftButtons}>
        <img
          className={css.ProjectLogo}
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="app logo"
        />
      </div>
      {sOut&&<h5 className={css.sOut} onClick={handleSignOut}>Sign Out</h5>}
    </div>
  );
};
export default Header;
