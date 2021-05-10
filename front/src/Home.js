import React from 'react';
import JOA from './JOA.png';
import Banner from './banner.png';
import './App.css';
import './Header.css';

function  Home(){
    return(
        <div>
            <div className = "banner">
                <img src = {Banner} alt = "Banner Image" />
            </div>
            <div className="App">
            <div className="App-header">
                <img src={JOA} className="App-logo" alt="logo" />
            </div>
            </div>
        </div>
    );
}

export default Home;