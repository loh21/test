import './App.css';
import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import FeedBack from './components/Feedback';
import ViewFB from './components/ViewFB';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import TandC from './components/TandC';
import Tvshows from './components/TvShows';
import Admin from './components/Admin';
import Movies from './components/Movies';
import MoviesEdit from './components/MoviesEdit';

function App() {
  
    return(
        <div className="App">
        <Router> {/*maps URL to functions*/}
        <div>
          <NavBar/>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/contactUs" element = {<ContactUs/>}/>
            <Route path="/FAQ" element = {<FAQ/>}/>
            <Route path="/feedback" element = {<FeedBack/>}/>
            <Route path="/ViewFB" element = {<ViewFB/>}/>
            <Route path="/TandC" element = {<TandC/>}/>
            <Route path="/TvShows" element = {<Tvshows/>}/>
            <Route path="/Admin" element = {<Admin/>}/>
            <Route path="/Movies" element = {<Movies/>}/>
            <Route path="/MoviesEdit" element = {<MoviesEdit/>}/>
          </Routes>
          <Footer/>
          </div>
        </Router>
        </div>
    ); 
  
}
export default withAuthenticator(App);
 
// do class diagram