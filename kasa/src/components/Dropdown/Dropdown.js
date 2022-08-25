import './Dropdown.css'
import { useState } from 'react'

export default function Dropdown(props) {

    const [showContent, setShowContent] = useState(false)
    const handleClick = () => {
        setShowContent(!showContent)
    }

    return (
        <div className='DropdownContainer' >
            <p className='DropdownTitle'>{props.title}</p>
            <i className='DropdownIcon' onClick={handleClick}><svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z" fill="white" />
            </svg>
            </i>
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