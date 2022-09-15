
import { Link } from "react-router-dom";
import './Thumb.css'
import Proptypes from 'prop-types'

const Thumb = (props) => {
    return (
        <div className='ThumbContainer'>
            <img className='ThumbCover' src={props.cover} alt="cover" />
            <Link
                to={`lodging/${props.url}`}
                key={props.index}
                className='ThumbTitle'>
                {props.text}
            </Link>
        </div>
    )

}

Thumb.propTypes = {
    cover: Proptypes.string,
    url: Proptypes.string,
    index: Proptypes.number,
    text: Proptypes.string
}

export default Thumb