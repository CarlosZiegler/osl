import React from 'react'
import Lottie from 'react-lottie';

import loadingDataJobs from '../../assets/lotties/8058-email-send-blue.json'


import './style.css'

function SectionContact() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingDataJobs,
    };

    return (
        <>
            <div id="contact" className="section-container text-primary bg-white">
                <h2 className="title">Kontakt</h2>
                <div className="lottieFile">
                    <Lottie options={defaultOptions}
                        height={"100%"}
                        width={"100%"}
                    />
                </div>
                <p className="text-container">
                    Bestehender Kunde? Holen Sie sich Hilfe bei technischen
                    Probleme und allgemeine Fragen durch einen Besuch in unserer FAQ.
                </p>
                <div className="contact-container text-secundary ">
                    <form>
                        <input className="contact-input" type="text" placeholder="Name" />
                        <input className="contact-input" type="email" placeholder="Email" />
                        <input className="contact-input" type="text" placeholder="Betreff" />
                        <textarea className="contact-input" placeholder="Nachricht" rows={4} />
                        <input className="contact-input contact-button" type="submit" value="Senden" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default SectionContact
