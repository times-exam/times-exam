import React, { Component } from 'react';
import Home from './Home';
import Contact from './Contact';
import Tutorials_Eng from './Tutorials_Eng';
import Tutorials_QA from './Tutorials_QA';
import Tutorials_CompApt from './Tutorials_CompApt';
import Tutorials_Reasoning from './Tutorials_Reasoning';
import IBPS from './IBPS';
import MBA from './MBA';
import SBI from './SBI';
import Railways from './Railways';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, NavLinkProps } from 'react-router-dom';
import About from './About';
import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'


class ServiceBar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto" >
                                <Nav.Link><NavLink to="/about" href="#about" style={{ color: 'black' }}>Banking</NavLink> </Nav.Link> 
                                <Nav.Link><NavLink to="/contact" href="#contact" style={{ color: 'black' }}>SSC</NavLink></Nav.Link> 
                                <Nav.Link><NavLink to="/about" href="#about" style={{ color: 'black' }}>FCI</NavLink> </Nav.Link> 
                                <Nav.Link><NavLink to="/contact" href="#contact" style={{ color: 'black' }}>Insurance</NavLink></Nav.Link> 
                                <Nav.Link><NavLink to="/about" href="#about" style={{ color: 'black' }}>Railways</NavLink> </Nav.Link> 
                                <Nav.Link><NavLink to="/contact" href="#contact" style={{ color: 'black' }}>Defence</NavLink></Nav.Link> 
                                <Nav.Link><NavLink to="/about" href="#about" style={{ color: 'black' }}>MBA</NavLink> </Nav.Link> 
                                <Nav.Link><NavLink to="/contact" href="#contact" style={{ color: 'black' }}>IIBF</NavLink></Nav.Link> 
                                </Nav>
                        </Navbar.Collapse>

                    </Navbar>

                    {/* <div>

                        <Route exact path='/' component={Home} />
                        <Route path='/ibps' component={IBPS} />
                        <Route path='/sbi' component={SBI} />
                        <Route path='/mba' component={MBA} />
                        <Route path='/railways' component={Railways} />
                    </div> */}
                </div>
            </Router>
        );
    }
}

export default ServiceBar;