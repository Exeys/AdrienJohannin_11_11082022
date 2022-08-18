import { Link } from "react-router-dom";
import logo from '../assets/LOGO.png';
import "./Navigation.css"

const Navigation = () => {
    return (
        <nav className='Navigation'>
            <div className='NavigationLogo'>
                <img src={logo}
                    className='NavigationListItem NavigationLogoItem'
                    alt="Kasa logo"></img>
            </div>

            <ul className='NavigationList'>
                <li className='NavigationListItem'>
                    <Link to="/">Accueil</Link>
                </li>
                <li className='NavigationListItem'>
                    <Link to="/about">A propos</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;

