// import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Headers from './Component/Header';
import FirstPl from './Component/FirstP';
import Footer from './Component/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactInfo from './Component/ContactInfo';
import Project from './Component/Project';
import { BiCertification } from 'react-icons/bi';
import AboutMe from './AboutMe';


function App() {
  return (
    <Fragment>
    <Headers/>
    {/* <FirstPl/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={FirstPl}>Home</Route>
        <Route path='/Contact' Component={ContactInfo}/>
        <Route path='/Project' Component={Project}/>
          <Route path='/AboutMe' Component={AboutMe}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </Fragment>
  )
}

export default App;
