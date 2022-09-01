import './Carrousel.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Carrousel = (props) => {
    const { children } = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <div className='CarrouselContainer'>
            <div className='CarrouselWrapper'>
                <svg className='left-arrow' onClick={prev} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
                </svg>
                <div className='CarrouselContentWrapper'>
                    <div className='CarrouselContent' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                        <div className='CarrouselNb'>
                            <p>{currentIndex + 1}/{length}</p>
                        </div>
                    </div>
                </div>
                <svg className='right-arrow' onClick={next} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
                </svg>
            </div>
        </div>
    )
}

export default Carrousel