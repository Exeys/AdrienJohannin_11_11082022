import React from 'react';
import Thumb from '../../components/Thumb/Thumb.js';
import './Home.css'

const Home = () =>{
    return (
        <div className='HomeContent'>
            <div className='Banner'>
                <div className='BannerText'>Chez vous, partout et ailleurs</div>
            </div>
            <div className='Thumbs'>
                <Thumb text='Nothing'/>
                <Thumb text='Nothing'/>
                <Thumb text='Nothing'/>
            </div>
            
        </div>

    )
}

export default Home;