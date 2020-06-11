import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactCircle from "./ContactCircle";

const Header = () => {
    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <h1 className="masthead-heading mb-0">Shrawan Adhikari</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <FontAwesomeIcon icon={["fas", "code"]} size="md" />
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <ContactCircle />
                <p className="masthead-subheading">
                I am  <b>Software Engineer</b> working in tech industry since last 3+ years, developing and delivering high quality applications. 
                I have worked on various projects from <b><i>Banking Services</i></b> to <b><i>Health Information Technology</i></b>, <b><i>Business Management Solution</i></b> and <b><i>R&D</i></b>. 
                Experiencing and exploring the industry working model, project management tools and team collaboration; 
                with hands-on experience on core back-end languages like <b><i>Java</i></b>, <b><i>Spring</i></b> and to fluently work in trending fronend technologies like <b><i>Angular</i></b>, and <b><i>React</i></b>.
                </p>
            </div>
        </header>
    );
};

export default Header;
