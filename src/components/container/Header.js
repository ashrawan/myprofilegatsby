import React from 'react';
import { P_LINKEDIN } from '../../utils/Constant';

const Header = () => {
    return (
        <div>
            <header className="masthead text-center text-white d-flex">
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2 className="text-uppercase">
                                <strong>- Shrawan Adhikari - <br />Software Engineer (Java Developer)</strong>
                            </h2>
                            <br />
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <p className="text-faded mb-5">Working 1+ Year in Software Industry; with technology in Java, Spring, and Hibernate; explores and loves both Angular, and React.</p>
                            <a className="btn btn-primary btn-xl js-scroll-trigger" target="_blank" href={P_LINKEDIN}>Find Out More</a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;