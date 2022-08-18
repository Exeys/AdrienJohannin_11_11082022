import './Footer.css'
import logo from '../../assets/LOGO.svg'
const Footer = () => {
    return (
        <div className='Footer'>
            <img src={logo} style={{height:20,width:61}}className='Footer-logo' alt="Kasa logo"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;