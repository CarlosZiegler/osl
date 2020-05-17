import React from 'react'
import Lottie from 'react-lottie';

import loadingWelcome from '../../assets/lotties/14482-welcome-onboard.json'
import Carlos from '../../assets/carlos.jpeg'


import './style.css'

function SectionTeam() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingWelcome,
    };

    return (
        <>
            <div id="team" className="section-container text-secundary bg-blue">
                <h2 className="title">Unsere Team</h2>
                <div className="lottieFile">
                    <Lottie options={defaultOptions}
                        height={"100%"}
                        width={"100%"}
                    />
                </div>
                <div className="team-container">
                    <div className="team-card">
                        <img src={Carlos} alt="" />
                        <p className="employee-name">Carlos Ziegler</p>
                        <p className="employee-position">Javascript Developer</p>
                    </div>
                    <div className="team-card">
                        <img src={Carlos} alt="" />
                        <p className="employee-name">Carlos Ziegler</p>
                        <p className="employee-position">Javascript Developer</p>
                    </div>
                    <div className="team-card">
                        <img src={Carlos} alt="" />
                        <p className="employee-name">Carlos Ziegler</p>
                        <p className="employee-position">Javascript Developer</p>
                    </div>
                    <div className="team-card">
                        <img src={Carlos} alt="" />
                        <p className="employee-name">Carlos Ziegler</p>
                        <p className="employee-position">Javascript Developer</p>
                    </div>
                    <div className="team-card">
                        <img src={Carlos} alt="" />
                        <p className="employee-name">Carlos Ziegler</p>
                        <p className="employee-position">Javascript Developer</p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default SectionTeam
