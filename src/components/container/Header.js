import React from 'react';
import ContactCircle from './ContactCircle';

const Header = () => {
    return (
        <header className="masthead text-center text-white d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1 className="text-uppercase">
                            <strong>- Shrawan Adhikari -</strong>
                        </h1>
                        <br />
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <p className="text-faded mb-5">Software Engineer with professional Industry experience on designing and developing core back-end applications using Java and Spring; and explores and loves both Angular, and React.</p>
                        <ContactCircle />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
