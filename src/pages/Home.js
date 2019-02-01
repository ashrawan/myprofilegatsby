import React from 'react';
import Navigation from '../components/container/Navigation';
import Header from '../components/container/Header';
import Skills from '../components/container/Skills';
import Portfolio from '../components/container/Portfolio';
import Experience from '../components/container/Experience';
import Technology from '../components/container/Technology';
import Contact from '../components/container/Contact';
import Footer from '../components/container/Footer';
import { Element } from 'react-scroll';

const Home = () => {

    return (
        <div>
            {/* <Navigation /> */}
            <Element name="section-top" className="element"><Navigation /></Element>
            <Element name="section-header" className="element"><Header /></Element>
            <Element name="section-skills" className="element"><Skills /></Element>
            <Element name="section-projects" className="element"><Portfolio /></Element>
            <Element name="section-experience" className="element"><Experience /></Element>
            <Element name="section-technology" className="element"><Technology /></Element>
            <Element name="section-contact" className="element"><Contact /></Element>
            <Footer />
        </div>
    );
};

export default Home;