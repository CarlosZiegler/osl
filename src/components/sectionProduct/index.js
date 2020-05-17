import React from 'react'

import Card from '../shared/card'

import loadingDataStorageCluster from '../../assets/lotties/7989-server-backup.json'
import loadingDataUVE from '../../assets/lotties/17869-bots-channel.json'
import loadingDataRemoteStorage from '../../assets/lotties/3738-blockchain-2.json'

import './style.css'

function SectionProducts() {



    return (
        <>
            <div className="section-container text-secundary bg-blue">
                <h2 className="title">Unsere Produkte</h2>
                <div className="cards-section">
                    <Card
                        title={'OSL Storage Cluster'}
                        lottieConfig={loadingDataStorageCluster}
                        description={'Clusterframework und hostbasierte Speichervirtualisierung'}
                    />
                    <Card
                        title={'OSL Unified Virtualisation Environment'}
                        lottieConfig={loadingDataUVE}
                        description={'Drei Dimensionen der Virtualisierung in einer Lösung'}
                    />
                    <Card
                        title={'OSL Remote Storage IO'}
                        lottieConfig={loadingDataRemoteStorage}
                        description={'Data-Center Block I/O über Netzwerk'}
                    />
                </div>
            </div>
        </>
    )
}

export default SectionProducts
