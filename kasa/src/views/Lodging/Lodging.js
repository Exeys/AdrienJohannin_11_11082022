
import Carrousel from '../../components/Carrousel/Carrousel.js'
import Tag from '../../components/Tag/Tag.js'
import Dropdown from '../../components/Dropdown/Dropdown'
import Rating from '../../components/Rating/Rating.js'
import test from '../../assets/Background.png'
import './Lodging.css'


const Lodging = () => {
    return (
        <div className='LodgingContent'>
            <Carrousel>
                <img src={test} alt="placeholder" />
                <img src="https://via.placeholder.com/1240x415" alt="placeholder" />
                <img src="https://via.placeholder.com/1240x415" alt="placeholder" />
            </Carrousel>
            <div className='LodgingDetails'>
                <div className='LodgingDetailsLeftside'>
                    <div className='LodgingTitle'>
                        <p>Cozy loft on the Canal Saint-Martin</p>
                    </div>
                    <div className='LodgingLocation'>
                        <p>Paris, Île-de-France</p>
                    </div>
                </div>
                <div className='LodgingDetailsRightside'>
                    <div className='LodgingAgent'>
                        <p>Alexandre Dumas</p>
                        <span className='AgentImage'></span>
                    </div>
                </div>
            </div>
            <Rating type="full" value="1" />
            <Rating type="empty" value="5" />{/*
            <div className="LodgingTags">
                <Tag text="Cozy" />
                <Tag text="Canal" />
                <Tag text="Paris 10" />
            </div>
            
            <Dropdown title="Description" />
            <Dropdown title="Équipements" />*/}
        </div>
    )
}

export default Lodging;