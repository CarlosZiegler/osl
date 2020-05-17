import React from 'react'
import Lottie from 'react-lottie';

import loadingData from '../../assets/lotties/8941-graficos-animados-com-homens-observando.json'

import './style.css'

function header() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingData,
    };

    return (
        <>
            <div className="lottieFile">
                <Lottie options={defaultOptions}
                    height={"100%"}
                    width={"100%"}
                />
            </div>
            <div className="text-container text-primary">
                <h3 className="title">Das Rechenzentrum der Zukunft</h3>
                <p className="description">Als eines der wenigen deutschen Technologie- und
                Entwicklungsunternehme im Bereich Virtual Storage und Clustering
                definiert OSL mit einem eigenen Softwarestack seit 16 Jahren die
            Spitze des Machbaren.</p>
            </div>
        </>
    )
}

export default header
