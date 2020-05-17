import React from 'react'
import Lottie from 'react-lottie';

import loadingDataJobs from '../../assets/lotties/15563-hiring-isometric-animation.json'


import './style.css'

function SectionJobs() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingDataJobs,
    };

    return (
        <>
            <div className="section-container text-primary bg-white">
                <h2 className="title">Arbeiten bei OSL</h2>
                <div className="lottieFile">
                    <Lottie options={defaultOptions}
                        height={"100%"}
                        width={"100%"}
                    />
                </div>
                <div className="jobs-container text-secundary ">
                    <div className="jobs-text">
                        <p>Linux-Systemberater</p>
                        <p>Vollzeit/Teilzeit</p>
                    </div>
                    <div className="jobs-text">
                        <p>Developer JavaScript (auch Junior)</p>
                        <p>Vollzeit/Teilzeit</p>
                    </div>
                    <div className="jobs-text">
                        <p>Softwareentwicklung</p>
                        <p>Werkstudent/in</p>
                    </div>
                    <div className="jobs-text">
                        <p>SysAdmin/Engineering</p>
                        <p>Werkstudent/in</p>
                    </div>
                    <div className="jobs-text">
                        <p>Berufs-/Pflichtpraktika</p>
                        <p>Werkstudent/in</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionJobs
