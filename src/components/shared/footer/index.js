import React from 'react'

import LogoLinkedin from '../../../assets/linkedin.svg'

import './style.css'

function Footer() {

    return (
        <>
            <div className="footer-container text-secundary bg-blue">
                <div className="footer-info ">
                    <img src={LogoLinkedin} alt="Linkedin" />
                </div>
                <div className="footer-info">
                    <p className="footer-contact" >
                        Telefon: +49 (0)30 8877430-0
                    </p>
                    <p className="footer-contact" >
                        Telefax: +49 (0)30 8877430-19
                    </p>
                    <p className="footer-contact" >
                        info@osl.eu
                    </p>
                </div>
                <div className="footer-info">
                    <p className="footer-contact" >
                        Schöneicher Straße 18
                    </p>
                    <p className="footer-contact" >
                        D-15566 Schöneiche bei Berlin
                    </p>
                </div>

            </div>
            <div className="footer-linea text-secundary bg-blue">
                <p className="footer-reserved" >
                    © OSL Gesellschaft für offene Systemlösungen GmbH 2020
                    </p>
            </div>
        </>
    )
}

export default Footer
