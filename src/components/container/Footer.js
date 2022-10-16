import React from 'react';
import ContactCircle from './ContactCircle';

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h2>Shrawan Adhikari</h2>
                    <ContactCircle />
                </div>
                <div className="col-md-12 mt-3 footer-copyright">
                    <span className="copyright">Copyright &copy; Shrawan Adhikari {year}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;