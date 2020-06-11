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
                    Software Engineer with valuable skills in System Design, Analysis and Development. Includes 2+ year of professional Industry experience
                    with hands-on experience on core back-end technologies with Java, Spring, Hibernate and MySQL; and explores and loves both Angular, and React.
                </p>
            </div>
        </header>
    );
};

export default Header;
