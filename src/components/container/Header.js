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
                    I am a <h3>Software Engineer</h3> <b>
                        <FontAwesomeIcon icon="fa-solid fa-code" /></b> <br></br>
                   Working in enterprise solutions, developing &amp; delivering high quality applications, since last <b>4+ years</b>.
                    Loves to research and explore - new tools and technology.
                    Skilled in using <b><i>Java, Spring, Docker, Kubernetes, and JavaScript, Angular, React, Bootstrap, Git, and Jira</i></b>.
                </p>
            </div>
        </header>
    );
};

export default Header;
