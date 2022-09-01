
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
                    <div className="LodgingTags">
                        <Tag text="Cozy" />
                        <Tag text="Canal" />
                        <Tag text="Paris 10" />
                    </div>
                </div>
                <div className='LodgingDetailsRightside'>
                    <div className='LodgingAgent'>
                        <p>Alexandre Dumas</p>
                        <span className='AgentImage'></span>
                    </div>
                    <div className='LodgingRating'>
                        <Rating type="full" value="3" />
                        <Rating type="empty" value="2" />
                    </div>
                </div>
            </div>
            <div className='LodgingDropdowns'>
                <Dropdown title="Description" type="small">
                    <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
                </Dropdown>
                <Dropdown title="Équipements" type="small">
                    <p>
                        Climatisation
                        Wi-Fi
                        Cuisine
                        Espace de travail
                        Fer à repasser
                        Sèche-cheveux
                        Cintres
                    </p>
                </Dropdown>
            </div>
        </div>
    )
}

export default Lodging;