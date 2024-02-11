import React from 'react';
import { Route, Routes} from 'react-router-dom';
// import NavPage from './Component/NavPage';
import './App.css';
import './Contact.css'
// import Section from './Component/Section';
import Signinpage from './Component/SigninPage';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';


const App = () => {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Signinpage" element={<Signinpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        
        
      </Routes>
    </>
  );
};

export default App;
