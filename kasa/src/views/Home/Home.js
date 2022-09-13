import React from 'react';
import Thumb from '../../components/Thumb/Thumb.js';
import './Home.css'
import data from '../../data/logements.json'

const Home = () => {
    return (
        <div className='HomeContent'>
            <div className='HomeBanner'>
                <div className='HomeBannerText'>
                    <p>Chez vous, partout et ailleurs</p>
                    </div>
            </div>
            <div className='Thumbs'>
                {data.map((apartment, i) => {
                    return (
                        <Thumb
                            text={apartment.title}
                            url={apartment.id}
                            cover={apartment.cover}
                            key={i} />
                    )
                })}
            </div>

        </div>

    )
}

export default Home;