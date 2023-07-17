import React ,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SignInPopUp from './components/OpenPopUp/SignInPopUp';
import Home from './components/Pages/Home/Home';
import Recruiters from './components/Recruiters/Recruiters';
import SearchInput from './components/SearchInput/SearchInput';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Pages/Dashboard';
import Error from './components/Pages/Error';
import MyProfile from './components/MyProfile/MyProfile';
import MyProfileDashBoard from './components/Pages/MyProfileDashBoard/MyProfileDashBoard';
import CurrrentlyApplied from './components/Pages/CurrentlyApplied/CurrrentlyApplied';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import Faqs from './components/Pages/Faqs/Faqs';
import BlogPage from './components/Pages/BlogPage/BlogPage';
import BlogSitePage from './components/Pages/BlogSitePage/BlogSitePage';
import Bookmark from './components/Pages/BookmarkJobs/BookmarkJob';
import BookmarkJob from './components/Pages/BookmarkJobs/BookmarkJob';


function App() {
  const [popUp, setPopUp] = useState({
    login: false,
    signup: false,
  });

  const {login, signup} = popUp;

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
    })
  }

  const closePopUp = () => setPopUp({
    singup: false,
    login: false,
  })

  return (
    <div className="App">
      <Router>
        <Navbar openSignInPopUp={openSignInPopUp} openSignUpPopUp={openSignUpPopUp}/>
        {login && <SignInPopUp closePopUp={closePopUp} openSignUpPopUp={openSignUpPopUp} />}
        {signup && <SignUp closePopUp={closePopUp} openSignInPopUp={openSignInPopUp} />}
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
        <Routes>
          <Route exact path='/aboutUs' element={<AboutUs/>}/>
        </Routes>
        <Routes>
          <Route exact path='/faqs' element={<Faqs/>}/>
        </Routes>
        <Routes>
          <Route exact path='/blogPage' element={<BlogPage/>}/>
        </Routes>
        <Routes>
          <Route exact path='/blogSite' element={<BlogSitePage/>}/>
        </Routes>
        <Routes>
          <Route exact path='/dashboard' element={<Dashboard/>}/>
        </Routes>
        <Routes>
          <Route exact path='/profile' element={<MyProfileDashBoard/>}/>
        </Routes>
        <Routes>
          <Route exact path='/appliedJobs' element={<CurrrentlyApplied/>}/>
        </Routes>
        <Routes>
          <Route exact path='/bookmark' element={<BookmarkJob/>}/>
        </Routes>
        {/* <Routes>
          <Route path='*' element={<Error/>}/>
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
