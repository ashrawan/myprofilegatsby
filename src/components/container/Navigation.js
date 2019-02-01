import React, { Component } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-scroll';

class Navigation extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        };
    }
    render() {
        return (
            <div>
                <Headroom
                    onUnpin={
                        () => {
                            const element = this.myDiv;
                            element.classList.add('fixed-top');
                        }}
                    onUnfix={
                        () => {
                            const element = this.myDiv;
                            element.classList.add('fixed-top');
                        }}
                >
                    <span className="fixed-top" ref={ref => this.myDiv = ref}>
                        <nav className="navbar navbar-expand-lg navbar-light mainNav">
                            <div className="container">
                                {/* <a className="navbar-brand" href="#page-top">Home</a> */}
                                <Link className="navbar-brand nav-link" activeClass="active" to="section-top" spy={true} smooth={true} duration={500}> SHRAWAN ADHIKARI </Link>
                                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarResponsive">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" activeClass="active" to="section-header" spy={true} smooth={true} duration={500}> Home </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" activeClass="active" to="section-skills" spy={true} smooth={true} duration={500}> Skills </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" activeClass="active" to="section-projects" spy={true} smooth={true} duration={500}> Projects </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" activeClass="active" to="section-experience" spy={true} smooth={true} duration={500}> Experience </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" activeClass="active" to="section-contact" spy={true} smooth={true} duration={500}> Contact </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </span>
                </Headroom>
            </div>
        );
    }
}

export default Navigation;