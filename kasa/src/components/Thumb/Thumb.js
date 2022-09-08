
import { Link } from "react-router-dom";
import Lodging from "../../views/Lodging/Lodging";
import './Thumb.css'

const Thumb = ({ text, url, cover, index }) => {
    return (
        <div className='ThumbContainer'>
            <img className='ThumbCover' src={cover} alt="cover" />
            <Link
                to={`lodging/${url}`}
                component={Lodging}
                key={index}
                className='ThumbTitle'>
                {text}
            </Link>
        </div>
    )

}

export default Thumb