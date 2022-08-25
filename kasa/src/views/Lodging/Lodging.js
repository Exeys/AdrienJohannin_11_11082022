
import Carrousel from '../../components/Carrousel/Carrousel.js'
import Tag from '../../components/Tag/Tag.js'
import Dropdown from '../../components/Dropdown/Dropdown'

import './Lodging.css'


const Lodging = () => {
    return (
        <div className='LodgingContent'>
            <Carrousel />
            <div className='LodgingDetails'>
                <div className='LodgingTitle'>Cozy loft on the Canal Saint-Martin</div>
                <div className='LodgingAgent'>Alexandre Dumas</div>
                <div className='LodgingLocation'>Paris, Île-de-France</div>
            </div>
            <div className="LodgingTags">
                <Tag text="Cozy" />
                <Tag text="Canal" />
                <Tag text="Paris 10" />
            </div>
            {/*
            <div className='LodgingRating'></div>
            <Dropdown title="Description" />
            <Dropdown title="Équipements" />*/}
        </div>
    )
}

export default Lodging;