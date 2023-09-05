import React ,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SignInPopUp from './components/OpenPopUp/SignInPopUp';

import Recruiters from './components/Recruiters/Recruiters';
import SearchInput from './components/SearchInput/SearchInput';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';

import Error from './Pages/Error';
import MyProfile from './components/MyProfile/MyProfile';
import AboutUs from './Pages/AboutUs/AboutUs';
import Faqs from './Pages/Faqs/Faqs';
import PostJob from './Pages/PostJob/PostJob';
import BogPage from './Pages/BlogPage/BlogPage';
import BlogSitePage from './Pages/BlogSitePage/BlogSitePage';
import MyProfileDashBoard from './Pages/MyProfileDashBoard/MyProfileDashBoard';
import CurrrentlyApplied from './Pages/CurrentlyApplied/CurrrentlyApplied';
import BookmarkJob from './Pages/BookmarkJobs/BookmarkJob';
import Settings from './Pages/SettingsDashboard/Settings';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Transcript from './Pages/Transcript';
import Forgot from './components/ForgotPassword/Forgot';



function App() {
  const [popUp, setPopUp] = useState({
    login: false,
    signup: false,
    forgotPass:false
  });

  const {login, signup, forgotPass} = popUp;

  const openSignUpPopUp = () => {
    setPopUp({
      ...popUp,
      signup: true,
      login: false,
    });
  };

  const openSignInPopUp = () => {
    setPopUp({
      ...popUp,
      signup: false,
      login: true,
      forgotPass:false
    });
  }

  const openForgot = () => {
    setPopUp({
      ...popUp,
      signup:false,
      login:false,
      forgotPass:true
    });
  }

  const closePopUp = () => setPopUp({
    singup: false,
    login: false,
    forgotPass:false
  });

  return (
    <div className="App">
      <Router>
        <Navbar openSignInPopUp={openSignInPopUp} openSignUpPopUp={openSignUpPopUp}/>
        {login && <SignInPopUp closePopUp={closePopUp} openSignUpPopUp={openSignUpPopUp} openForgot={openForgot}/>}
        {signup && <SignUp closePopUp={closePopUp} openSignInPopUp={openSignInPopUp} />}
        {forgotPass && <Forgot closePopUp={closePopUp}/>}
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
          <Route exact path='/post' element={<PostJob/>}/>
        </Routes>
        <Routes>
          <Route exact path='/blogPage' element={<BogPage/>}/>
        </Routes>
        <Routes>
          <Route exact path='/blogSite' element={<BlogSitePage/>} />
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
        <Routes>
          <Route exact path='/settings' element={<Settings/>}/>
        </Routes>
        <Routes>
          <Route exact path='/viewTranscript' element={<Transcript/>}/>
        </Routes>

        {/* <Routes>
          <Route path='*' element={<Error/>}/>
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
