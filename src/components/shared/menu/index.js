import React from 'react'

import Logo from '../../../assets/Logo.svg'
import MenuButton from './menuButton'

import './style.css'

function header() {

    return (
        <>
            <header>
                <img src={Logo} alt="OSL" />
                <MenuButton />
            </header>
        </>
    )
}

export default header
