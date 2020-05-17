import React from 'react'
import Lottie from 'react-lottie';

import loadingDataNews from '../../assets/lotties/11497-interface.json'


import './style.css'

function SectionNews() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingDataNews,
    };

    return (
        <>
            <div id="news" className="section-container text-secundary bg-blue">
                <h2 className="title">Aktuelles</h2>
                <div className="lottieFile">
                    <Lottie options={defaultOptions}
                        height={"100%"}
                        width={"100%"}
                    />
                </div>
                <div className="news-container">
                    <div className="news-text">
                        <p>Nächste Veranstaltung: OSL Aktuell</p>
                        <p>16. Juni 2020 Schöneiche / Berlin</p>
                    </div>
                    <div className="news-text">
                        <p >Rückblick: OSL-Technologietag</p>
                        <p>12. November 2019, Schöneiche/Berlin</p>
                    </div>
                    <div className="news-text">
                        <p >Rückblick: OSL IT-Pokal-Regatta</p>
                        <p>14. September 2019, Schöneiche/Berlin</p>
                    </div>
                    <div className="news-text">
                        <p >Rückblick: OSL Aktuell 2019</p>
                        <p>22. Mai 2019, Schöneiche/Berlin</p>
                    </div>
                    <div className="news-text">
                        <p >Rückblick: OSL-Technologietag</p>
                        <p>14. November 2018, Schöneiche/Berlin</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionNews
