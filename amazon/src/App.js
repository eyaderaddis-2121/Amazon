import React from "react";
import Routing from "./Router";
import "./App.css";
import './index.css'
import { useEffect, useContext } from "react";
import { auth } from "./Utility/Firebase";
import { DataContext } from "./components/DataProvider/DataProvider";
import { Type } from "./Utility/action.type"; 



function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in, update context state
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        // User is signed out, clear context state
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, [dispatch]);

  return  <Routing />
  
}

export default App;
