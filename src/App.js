import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/NavBar';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
// import Footer from './Footer'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/index.css'

function App() {
    return (

        <div className= "App">
            <Header /> 
            
            <BrowserRouter>
                <div>
                    <Navbar />
                </div>
                <div>     
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/project" element={<Project />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;