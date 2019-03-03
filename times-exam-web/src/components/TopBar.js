import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, NavLinkProps } from 'react-router-dom';
import logo from '../logo.svg';
import banner5 from '../images/banner5.jpg';
// import logo1 from '../logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
 


class TopBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                        
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto" class="nav">
                                <Nav.Link><NavLink to="/" href="#about" >Home</NavLink> </Nav.Link>
                                <Nav.Link><NavLink to="/exam" href="#exam">Exam</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/courses" href="#courses">Courses</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/currentaffairs" href="#currentaffairs">Current Affairs</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/quiz" href="#quiz">Quiz</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/interview" href="#interview">Interview</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/preexampaper" href="#preexampaper">Previous year Exam paper</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/stories" href="#stories">Motivational Stories</NavLink></Nav.Link>
                                </Nav>
                                </Navbar.Collapse>
                    </Navbar>
            </div>
        );
    }
}

export default TopBar;