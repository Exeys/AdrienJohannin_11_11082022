import React from 'react';
import Dropdown from '../../components/Dropdown/Dropdown.js'
import './About.css';

const About = () => {
    return (
        <div className='AboutContent'>
            <div className='AboutBanner'></div>
            <div className='Dropdowns'>
                <Dropdown title="Fiabilité">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Dropdown>
                <Dropdown title="Respect">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Dropdown>
                <Dropdown title="Service">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Dropdown>
            </div>
        </div>



    )
}

export default About;