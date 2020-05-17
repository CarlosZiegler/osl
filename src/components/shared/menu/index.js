import React from 'react'

import Logo from '../../../assets/Logo.svg'
import MenuButton from '../../../assets/MenuButton.svg'

import './style.css'

function header() {
    return (
        <>
            <header>
                <img src={Logo} alt="OSL" />
                <img src={MenuButton} alt="menu" />
            </header>
        </>
    )
}

export default header
