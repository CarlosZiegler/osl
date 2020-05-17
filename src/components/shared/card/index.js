import React from 'react'
import Lottie from 'react-lottie';

import './style.css'

function card(props) {

    const { title, lottieConfig, description } = props

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottieConfig,
    };

    return (
        <>
            <figure className="card">
                <h3 className="card-title text-primary">{title}</h3>
                <div className="card-img bg-blue">
                    <Lottie options={defaultOptions}
                        height={"100%"}
                        width={"100%"}
                    />
                </div>
                <p className="card-description text-primary">{description}</p>
                <a href="/" className="card-button">Mehr erfahren</a>
            </figure>
        </>
    )
}

export default card
