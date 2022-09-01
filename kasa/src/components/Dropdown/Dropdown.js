import './Dropdown.css'
import { useState } from 'react'
import chevronhaut from '../../assets/chevronhaut.svg'
import chevronbas from '../../assets/chevronbas.svg'

export default function Dropdown(props) {

    const type = props.type;

    let className = 'DropdownContainer';
    if (type === 'small') {
        className += ' small'
    }

    const [showContent, setShowContent] = useState(false)
    const handleClick = () => {
        setShowContent(!showContent)
    }

    return (
        <div className={className}>
            <p className='DropdownTitle'>{props.title}</p>
            <img src={showContent ? chevronhaut : chevronbas}
                className='DropdownIcon'
                onClick={handleClick}
                alt="icon" />

            {
                showContent && (
                    <div className='DropdownContent'>
                        {props.children}
                    </div>
                )
            }
        </div>
    )
}