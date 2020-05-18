import React from "react";

import Logo from '../../../assets/Logo.svg'
import MenuButton from './menuButton'

import './style.css'



function header() {
    return (
        <>
            <navbar>
                <img src={Logo} alt="OSL" />
                <MenuButton />
            </navbar>
        </>
    )
}



export default header
