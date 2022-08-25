import React from 'react';
import Thumb from '../../components/Thumb/Thumb.js';
import './Home.css'

const Home = () =>{
    return (
        <div className='HomeContent'>
            <div className='HomeBanner'>
                <div className='HomeBannerText'>Chez vous, partout et ailleurs</div>
            </div>
            <div className='Thumbs'>
                <Thumb text="Titre de la location"/>
                <Thumb text="Titre de la location"/>
                <Thumb text="Titre de la location"/>
                <Thumb text="Titre de la location"/>
                <Thumb text="Titre de la location"/>
                <Thumb text="Titre de la location"/>
            </div>
            
        </div>

    )
}

export default Home;