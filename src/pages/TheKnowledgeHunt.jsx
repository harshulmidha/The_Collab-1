import React, { useState } from 'react'


import NavBar from "../components/igs/IGS_Navbar";
import IGS_Footer from "../components/igs/IGS_Footer";
import Sidebar from "../components/SideBarIGS";
import ConductionDetail from '../components/TheKnowledgeHunt/ConductionDetail/ConductionDetail';
import Register from '../components/TheKnowledgeHunt/Register/Register';
import Hunt from './Hunt'




const Home = () => {

    return (
        <>
            {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
            {/* <NavBar toggle={toggle} /> */}
            <Hunt/>
            <Register />
            <ConductionDetail />
            {/* <IGS_Footer /> */}
        </>
    )
}

export default Home







