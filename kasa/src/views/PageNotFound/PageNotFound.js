import { Link } from 'react-router-dom'
import Katcenkat from '../../assets/404.png'

import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className='PageNotFoundContent'>
            <img src={Katcenkat} alt="404" height={130} width={310} style={{padding:50}}/>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <p className='Redirection'>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </p>
        </div>
    )
}

export default PageNotFound;