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
import '../components/service.css'


class ServiceBar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto" class="nav">
                                <Nav.Link><NavLink to="/about" href="#about">Banking</NavLink> </Nav.Link> 
                                <Nav.Link><NavLink to="/contact" href="#contact" >SSC</NavLink></Nav.Link> 
                                <Nav.Link><NavLink to="/about" href="#about" >FCI</NavLink> </Nav.Link> 
                                <Nav.Link><NavLink to="/contact" href="#contact" >Insurance</NavLink></Nav.Link> 
                                <Nav.Link><NavLink to="/about" href="#about" >Railways</NavLink> </Nav.Link> 
                                <Nav.Link><NavLink to="/contact" href="#contact" >Defence</NavLink></Nav.Link> 
                                <Nav.Link><NavLink to="/about" href="#about" >MBA</NavLink> </Nav.Link> 
                                <Nav.Link><NavLink to="/contact" href="#contact" >IIBF</NavLink></Nav.Link> 
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