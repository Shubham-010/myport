// import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
import Headers from './Component/Header';
import FirstPl from './Component/FirstP';
import Footer from './Component/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactInfo from './Component/ContactInfo';
import Project from './Component/Project';
import { BiCertification } from 'react-icons/bi';
import AboutMe from './Component/AboutMe';
import Exp1 from './Component/Exp';
import Scrolltop from './scollup';
import { ThemeProvider } from './ThemeChanger';
import ThemeToggleButton from './ThemeBut';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);
  return (
   <ThemeProvider>
      <div className='app-container '>
    <Fragment>
    <Headers/>
    {/* <FirstPl/> */}
    <BrowserRouter>
      <Routes>  
      <Route path='/' element={ 
            <>
              <FirstPl />
              <AboutMe />
              <Exp1/>
              <Project />
              <ContactInfo />
              <Scrolltop/>
            </>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </Fragment>
    </div>
    </ThemeProvider>
  )
}

export default App;
