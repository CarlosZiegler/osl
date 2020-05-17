import React from 'react'


import Menu from '../../components/shared/menu'
import Header from '../../components/header'
import SectionProduct from '../../components/sectionProduct'
import SectionServices from '../../components/sectionServices'
import SectionNews from '../../components/sectionNews'
import SectionJobs from '../../components/sectionJobs'
import SectionTeam from '../../components/sectionTeam'
import SectionContact from '../../components/sectionContact'
import Footer from '../../components/footer'

function home() {
    return (
        <>
            <Menu />
            <Header />

            <SectionProduct />


            <SectionServices />


            <SectionNews />


            <SectionJobs />



            <SectionTeam />


            <SectionContact />


            <Footer />
        </>
    )
}

export default home
