import React from 'react';
import AboutMe from '../../AboutMe/AboutMe';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import MyProjects from '../MyProjects/MyProjects';
import Skils from '../Skils/Skils';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyProjects></MyProjects>
            <Skils></Skils>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;