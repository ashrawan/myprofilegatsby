import React from 'react';
import Header from '../components/container/Header';
import Skills from '../components/container/Skills';
import Projects from '../components/container/Projects';
import Experience from '../components/container/Experience';
import { Element } from 'react-scroll';

const Home = () => {

    return (
        <>
            <Element name="section-header" className="element"><Header /></Element>
            <Element name="section-skills" className="element"><Skills /></Element>
            <Element name="section-projects" className="element"><Projects /></Element>
            <Element name="section-experience" className="element"><Experience /></Element>
        </>
    );
};

export default Home;