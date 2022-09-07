import './Thumb.css'

const Thumb = ({ text, url, cover }) => {
    return (
        <div className='ThumbContainer'>
            <img className='ThumbCover' src={cover} alt="cover"/>
            <a href="../lodging:{url}" className='ThumbTitle'>{text}</a>
        </div>
    )

}

export default Thumb