import React, { useContext, useState } from "react"; 
import classes from "./Signup.module.css"; 
import { Link, useNavigate, useLocation } from "react-router-dom"; // Importing routing components
import { auth } from "../../Utility/Firebase"; // Importing Firebase authentication instance
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"; 
import { DataContext } from "../../components/DataProvider/DataProvider"; 
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners"; 



function Auth() {
  // State to track email, password, errors, and loading for sign in/up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  // Accessing global state (user) and dispatch from context
  const [{ user }, dispatch] = useContext(DataContext);

  const navigate = useNavigate(); // Hook for programmatic navigation
  const navStateData = useLocation(); 
  // console.log(navStateData); // Logging the navigation state for debugging

  
  const authHandler = (e) => {
    e.preventDefault(); 

    if (e.target.name === "signIn") {
      setLoading({ ...loading, signIn: true }); // Set loading state for sign in
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // Successful sign-in
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false }); // Reset loading state
          navigate(navStateData?.state?.redirect || "/"); // Navigate to intended page or home
        })
        .catch((err) => {
          setError(err.message); 
          setLoading({ ...loading, signIn: false }); 
        });
    } else {
      // Handle Sign Up
      setLoading({ ...loading, signUp: true }); 
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // Successful sign-up
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false }); // Reset loading state
          navigate(navStateData?.state?.redirect || "/"); // Navigate to intended page or home
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false }); 
        });
    }
  };

  return (
    <section className={classes.auth}>
      
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/1280px-Amazon_2024.svg.png"
          alt="amazon logo"
        />
      </Link>

      {/* Authentication form */}
      <div className={classes.auth__container}>
        <h1>Sign In</h1>
        {/* Optional login message if passed via navigation state */}
        {navStateData?.state?.msg && (
          <small className={classes.auth__msg_login}>
            {navStateData?.state?.msg}
          </small>
        )}

        {/* Form with email and password fields */}
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Set email state
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Set password state
              type="password"
              id="password"
            />
          </div>
          {/* Sign In button */}
          <button
            type="submit"
            onClick={authHandler}
            name="signIn"
            className={classes.auth__signIn_btn}
          >
            {loading.signIn ? <ClipLoader color="#000" size={20} /> : "Sign In"}{" "}
            {/* Display loading spinner or text */}
          </button>
        </form>

        
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, Cookies Notice, and our
          Interest-based Ads Notice.
        </p>

        {/* Create Account button */}
        <button
          type="submit"
          onClick={authHandler}
          name="signUp"
          className={classes.auth__signUp_btn}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}{" "}
          {/* Display loading spinner or text */}
        </button>

        {/* Error message */}
        {error && <small className={classes.auth__error}>{error}</small>}
      </div>
    </section>
  );
}

export default Auth; 