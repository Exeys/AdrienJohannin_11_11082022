import Carrousel from '../../components/Carrousel/Carrousel.js'
import Tag from '../../components/Tag/Tag.js'
import Dropdown from '../../components/Dropdown/Dropdown'
import Rating from '../../components/Rating/Rating.js'
import data from '../../data/logements.json'
import PageNotFound from '../PageNotFound/PageNotFound'
import './Lodging.css'
import { useParams } from 'react-router-dom'



const Lodging = () => {

    const { id } = useParams();
    const apartment = data.find((apartment) => apartment.id === id)

    return apartment ? (
        <div className='LodgingContent'>
            <Carrousel>
                {apartment.pictures}
            </Carrousel>
            <div className='LodgingDetails'>
                <div className='LodgingDetailsLeftside'>
                    <div className='LodgingTitle'>
                        <p>{apartment.title}</p>
                    </div>
                    <div className='LodgingLocation'>
                        <p>{apartment.location}</p>
                    </div>
                    <div className="LodgingTags">
                        {apartment.tags.map((tag, i) => {
                            return (
                                <Tag text={tag} />
                            )
                        })}
                    </div>
                </div>
                <div className='LodgingDetailsRightside'>
                    <div className='LodgingAgent'>
                        <p>{apartment.host.name}</p>
                        <span className='AgentImage'>
                            <img src={apartment.host.picture} alt="host" />
                        </span>
                    </div>
                    <div className='LodgingRating'>
                        <Rating value={apartment.rating} />
                    </div>
                </div>
            </div>
            <div className='LodgingDropdowns'>
                <div className='Drop'>
                    <Dropdown title="Description" type="small">
                        <p>{apartment.description}</p>
                    </Dropdown>
                </div>
                <div className='Drop'>
                    <Dropdown title="Équipements" type="small">
                        <ul>
                            {apartment.equipments.map((equipment) => {
                                return(
                                     <li>{equipment}</li>
                                )
                            })}
                        </ul>
                    </Dropdown>
                </div>
            </div>
        </div>
    ) : (
        <PageNotFound />
    )
}

export default Lodging;