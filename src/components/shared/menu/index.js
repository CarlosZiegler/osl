import React, { useState, useEffect } from "react";

import Logo from '../../../assets/Logo.svg'
import MenuButton from './menuButton'

import './style.css'

function Header2() {
    const [header, setHeader] = useState("header");

    const listenScrollEvent = event => {
        if (window.scrollY < 73) {
            return setHeader("header");
        } else if (window.scrollY > 70) {
            return setHeader("header2");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);

        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    return (
        <header className={header}>
            <img src={Logo} alt="OSL" />
            <MenuButton />
        </header>
    );
}

export default Header2;