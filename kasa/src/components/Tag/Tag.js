import './Tag.css'

const Tag = ({text}) => {
    return(
        <div className='TagContainer'>
        <p className='TagText'>{text}</p>
    </div>
    )
    
}

export default Tag;