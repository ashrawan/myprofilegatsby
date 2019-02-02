import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-scroll';

class Navigation extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        };
    }

    toggle() {
        console.log(this.state.isOpen);
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <>
                <Headroom className="wrapper-headroom-fix"
                    onUnpin={
                        () => {
                            const element = this.myDiv;
                            element.classList.add('fixed-top');
                        }}
                    onUnfix={
                        () => {
                            const element = this.myDiv;
                            element.classList.add('fixed-top');
                        }}>
                    <span className="fixed-top" ref={ref => this.myDiv = ref}>
                        <nav className="navbar navbar-expand-lg navbar-light mainNav">
                            <button className="nav-toggler" type="button" onClick={() => this.toggle()}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="container">
                                <Link className="navbar-brand nav-link" activeClass="active" to="section-header" spy={true} smooth={true} duration={500}> SHRAWAN ADHIKARI </Link>
                                <div className={this.state.isOpen ? '' : 'hidden'} id="navbarResponsive">
                                    <ul className="navbar-nav ml-auto" style={{ display: 'inline-flex' }}>
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
            </>
        );
    }
}

export default Navigation;