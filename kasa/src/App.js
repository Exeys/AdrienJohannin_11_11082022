import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './views/Home/Home.js';
import About from './views/About/About.js';
import Navigation from './nav/Navigation';
import Footer from './components/Footer/Footer.js';


import './App.css';

const App = () => {
    return (
        <div className='AppContent'>
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home/>}>
                    </Route>
                    <Route path="/about" element={<About/>}>
                    </Route>
                </Routes>
                <Footer/>
            </Router >
        </div>
    )
}


export default App;
