import React from 'react'

import Menu from '../../components/shared/menu'
import Header from '../../components/header'
import SectionProduct from '../../components/sectionProduct'
import SectionServices from '../../components/sectionServices'

function home() {
    return (
        <>
            <Menu />
            <Header />
            <SectionProduct />
            <SectionServices />
        </>
    )
}

export default home
