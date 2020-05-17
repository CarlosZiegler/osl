import React from 'react'
import Lottie from 'react-lottie';

import loadingDataTogether from '../../assets/lotties/20185-all-fits-together.json'
import loadingDataPartner from '../../assets/lotties/16952-group-working.json'
import loadingDataCooperator from '../../assets/lotties/15255-marketing-analytics.json'
import loadingDataConsulting from '../../assets/lotties/18365-animaton-for-e-learning-web-site.json'

import './style.css'

function sectionServices() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingDataTogether,
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: loadingDataPartner,
    };
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: loadingDataCooperator,
    };
    const defaultOptions4 = {
        loop: true,
        autoplay: true,
        animationData: loadingDataConsulting,
    };

    return (
        <>
            <div className="section-container text-primary bg-white">
                <div className="section-title">
                    <h2 className="title">Gemeinsam mehr erreichen</h2>
                    <div className="card-img">
                        <Lottie options={defaultOptions}
                            height={"100%"}
                            width={"100%"}
                        />
                    </div>
                </div>
                <div className="section-column">
                    <div className="service-img">
                        <Lottie options={defaultOptions2}
                            height={"100%"}
                            width={"100%"}
                        />
                    </div>
                    <div className="service-description text-secundary bg-blue">
                        <h3 className="title">Partnerprogramm</h3>
                        <p className="title">Mit dem OSL Partnerprogramm unterstützt OSL Systemhäuser und Integratoren, damit diese noch erfolgreicher am Markt agieren können.</p>
                    </div>
                </div>
                <div className="section-column">
                    <div className="service-description text-secundary bg-blue">
                        <h3 className="title">Kooperation</h3>
                        <p className="title">Mit dem Ziel einer gegenseitig vorteilhaften Zusammenarbeit ist OSL selbst Mitglied in Partnerprogrammen ausgewählter Hersteller. </p>
                    </div>
                    <div className="service-img">
                        <Lottie options={defaultOptions3}
                            height={"100%"}
                            width={"100%"}
                        />
                    </div>
                </div>
                <div className="section-column">
                    <div className="service-img">
                        <Lottie options={defaultOptions4}
                            height={"100%"}
                            width={"100%"}
                        />
                    </div>
                    <div className="service-description text-secundary bg-blue">
                        <h3 className="title">Schulungen</h3>
                        <p className="title">
                            Im Rahmen des OSL Partnerprogramms bietet OSL, beginnend von vertrieblich orientierten Veranstaltungen über Expertenseminare bis hin zu Workshops.</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default sectionServices
