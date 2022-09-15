import './Tag.css'
import Proptypes from 'prop-types'

const Tag = ({text}) => {
    return(
        <div className='TagContainer'>
        <p className='TagText'>{text}</p>
    </div>
    )
    
}

Tag.propTypes = {
    text: Proptypes.string
}

export default Tag;