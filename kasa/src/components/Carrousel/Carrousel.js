import './Carrousel.css';
import { useState } from 'react';
import { useEffect } from 'react';
import LeftArrow from '../../assets/arrowleft.svg'
import RightArrow from '../../assets/arrowright.svg'
import Proptypes from 'prop-types'

const Carrousel = (props) => {


    const { children } = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const suivant = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        } else {
            setCurrentIndex(0)
        }
    }

    const precedent = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        } else {
            setCurrentIndex(length - 1)
        }
    }

    return (
        <div className='CarrouselContainer'>
            <img className='CarrouselContent' src={children[currentIndex]} alt="app" />
            {children.length > 1
                ? <div>
                    <img className='left-arrow' onClick={precedent} alt="flèche de gauche" src={LeftArrow}></img>
                    <img className='right-arrow' onClick={suivant} alt="flèche de droit" src={RightArrow}></img>
                    <p className='CarrouselNb'>{currentIndex + 1}/{length}</p>
                </div> : ""
            }

        </div>
    )
}

Carrousel.propTypes = {
    children: Proptypes.array
}

export default Carrousel