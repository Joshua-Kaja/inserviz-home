import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SignInPopUp from "./components/OpenPopUp/SignInPopUp";
import Home from "./components/Pages/Home/Home";
import Recruiters from "./components/Recruiters/Recruiters";
import SearchInput from "./components/SearchInput/SearchInput";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const [popUp, setPopUp] = useState({
    login: false,
    signup: false,
  });

  const { login, signup } = popUp;

  const openSignUpPopUp = () => {
    setPopUp({
      signup: true,
      login: false,
    });
  };

  const openSignInPopUp = () => {
    setPopUp({
      signup: false,
      login: true,
    });
  };

  const closePopUp = () =>
    setPopUp({
      singup: false,
      login: false,
    });

  return (
    <div className="App">
      <Router>
        <Navbar openSignInPopUp={openSignInPopUp} />
        {login && (
          <SignInPopUp
            closePopUp={closePopUp}
            openSignUpPopUp={openSignUpPopUp}
          />
        )}
        {signup && (
          <SignUp closePopUp={closePopUp} openSignInPopUp={openSignInPopUp} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      z
    </div>
  );
}

export default App;
