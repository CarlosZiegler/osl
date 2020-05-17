import React from 'react'

import Menu from '../../components/shared/menu'
import Header from '../../components/header'
import SectionProduct from '../../components/sectionProduct'
import SectionServices from '../../components/sectionServices'
import SectionNews from '../../components/sectionNews'
import SectionJobs from '../../components/sectionJobs'

function home() {
    return (
        <>
            <Menu />
            <Header />
            <SectionProduct />
            <SectionServices />
            <SectionNews />
            <SectionJobs />
        </>
    )
}

export default home
