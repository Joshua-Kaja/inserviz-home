import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SignInPopUp from "./components/OpenPopUp/SignInPopUp";
import Home from "./components/Pages/Home/Home";
import Recruiters from "./components/Recruiters/Recruiters";
import SearchInput from "./components/SearchInput/SearchInput";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/Pages/Dashboard";
import Error from "./components/Pages/Error";
import MyProfile from "./components/MyProfile/MyProfile";
import MyProfileDashBoard from "./components/Pages/MyProfileDashBoard/MyProfileDashBoard";
import CurrrentlyApplied from "./components/Pages/CurrentlyApplied/CurrrentlyApplied";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import { Link } from "react-router-dom";
import navImg from "./components/Pages/assets/inserviz.png";
import post from "./components/Pages/assets/post.svg";
import personIcon from "./components/Pages/assets/person-3.svg";
import { FaTimes } from "react-icons/fa";
import x from "./components/Pages/assets/x.svg";
import facebook from "./components/Pages/assets/facebook-2.svg";
import twitter from "./components/Pages/assets/twiter-2.svg";
import linkedIn from "./components/Pages/assets/linkedin-2.svg";
import instagram from "./components/Pages/assets/instagram.svg";
import SocialMedia from "./components/SocialLinks/SocialLinks";

function App() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [selectPost, setSelectedPost] = useState(null);

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

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
      setIsMenuClicked(false);
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }

    setIsMenuClicked(!isMenuClicked);
  };

  function handlePostClick(e) {
    e.preventDefault();
    setSelectedPost(selectPost);
  }

  return (
    <div className="App">
      <div className={menu_class}>
        <div className="menu-wrapper">
          <div className="menu-head">
            <div className="inserviz-logo">
              <img src={navImg} alt="Inserviz" />
            </div>

            <div
              className="fa-times"
              onClick={() => {
                setIsMenuClicked(true);
                updateMenu();
              }}
            >
              <img src={x} />
            </div>
          </div>

          <div className="menu-items">
            <a id="home-id" href="/">
              {" "}
              Home
            </a>
            <a href="/"> About Us</a>
            <a href="/"> FAQS</a>
            <a href="/"> Blog</a>
          </div>

          <div className="btn-wrapper">
            <button
              className="menu-inprov-btn"
              type="button"
              onClick={openSignUpPopUp}
            >
              Become an Inprov
            </button>
          </div>

          <div className="signIn-wrapper">
            <div className="menu-signIn" onClick={openSignInPopUp}>
              <img src={personIcon} alt="" />
              <button type="button">Sign In</button>
            </div>
          </div>

          <div className="postJob-wrapper">
            <div className="menu-postJob">
              <img src={post} alt="" />

              <button type="button" onClick={handlePostClick}>
                Post Job
              </button>
            </div>
          </div>

          <div className="menu-social-platform">
            <div className="socialMedia">
              <img src={facebook} />
            </div>

            <div className="socialMedia">
              <img src={twitter} />
            </div>
            <div className="socialMedia">
              <img src={linkedIn} />
            </div>
            <div className="socialMedia">
              <img src={instagram} />
            </div>
          </div>
        </div>
        {/* <div className="Links">
          <Link style={{ textDecoration: "0", color: "#000" }} to="/">
            <span>Home</span>
          </Link>
          <Link style={{ textDecoration: "0", color: "#000" }} to="/aboutUs">
            <span style={{ paddingLeft: "3rem" }}>About Us</span>
          </Link>
          <Link style={{ textDecoration: "0", color: "#000" }} to="/faqs">
            <span style={{ paddingLeft: "3rem" }}>FAQS</span>
          </Link>
          <Link style={{ textDecoration: "0", color: "black" }} to="/blog">
            <span style={{ paddingLeft: "3rem" }}>Blog</span>
          </Link> */}
        {/* <button
            className="btn_inprov"
            type="button"
            onClick={openSignUpPopUp}
          >
            Become an Inprov
          </button>
        </div> */}
      </div>

      <Router>
        <Navbar
          updateMenu={updateMenu}
          openSignInPopUp={openSignInPopUp}
          openSignUpPopUp={openSignUpPopUp}
        />
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
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route exact path="/profile" element={<MyProfileDashBoard />} />
        </Routes>
        <Routes>
          <Route exact path="/appliedJobs" element={<CurrrentlyApplied />} />
        </Routes>
        {/* <Routes>
          <Route path='*' element={<Error/>}/>
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
