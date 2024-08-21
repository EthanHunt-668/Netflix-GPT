import { useRef, useState } from "react";
import css from "./login.module.css";
import { FormValidation } from "../Utils/formValidation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";

const Login = () => {

   

  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const [errMsg, setErrMsg] = useState();

  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    
    const Msg = FormValidation(email.current.value, password.current.value);
    setErrMsg(Msg);

    if (Msg) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(error.message);
        });
    }
    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(error.message);
        });
    }
  };

  return (
    <div className={css.body}>
      <img
        className={css.BgImg}
        src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_medium.jpg"
        alt="Background"
      />

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className={`${css.form}`}
      >
        <h2>{isSignIn ? `Sign In` : `Sign Up`}</h2>
        {!isSignIn && (
          <input
            className={`${css.inputText}`}
            type="text"
            placeholder="Enter your Name"
          />
        )}
        <input
          ref={email}
          className={`${css.inputText}`}
          type="text"
          placeholder="Email or Phone Number"
        />
        <br />

        <input
          ref={password}
          className={css.inputText}
          type="password"
          placeholder={isSignIn ? "Password" : "Create Password"}
        />
        <br />

        <button onClick={handleClick}>
          {isSignIn ? `Sign In` : `Sign Up`}
        </button>
        <p className={css.errMsg}>{errMsg}</p>
        <div className={css.cbContainer}>
          <div>
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember me.</label>
          </div>
          <a href="#" className={css.Help}>
            Need help?
          </a>
        </div>
        <div className={css.msg}>
          New to Netflix?{" "}
          <a onClick={toggleSignIn} className={css.SignUp}>
            {isSignIn ? `Sign up now.` : `Sign in.`}
          </a>
        </div>
        <small className={css.botMsg}>
          This page is protected by Google reCAPTCHA to ensure you are not a
          bot.<a href="#">Learn more.</a>
        </small>
      </form>
    </div>
  );
};
export default Login;
