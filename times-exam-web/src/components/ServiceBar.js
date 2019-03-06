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
import Banking from './Banking'
import SSC from './SSC'
import FCI from './FCI'
import Insurance from './Insurance'
import Defence from './Defence'
import IIBF from './IIBF'
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
            <Switch>
                <div>
                <h2>Service Bar</h2>
                    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto" class="nav">
                            <Nav.Link><NavLink to="/" href="#home">Home</NavLink> </Nav.Link>
                                <Nav.Link><NavLink to="/banking" href="#about">Banking</NavLink> </Nav.Link> 
                                <Nav.Link><NavLink to="/ssc" href="#ssc" >SSC</NavLink></Nav.Link> 
                                <Nav.Link><NavLink to="/fci" href="#fci" >FCI</NavLink> </Nav.Link> 
                                <Nav.Link><NavLink to="/insurance" href="#insurance" >Insurance</NavLink></Nav.Link> 
                                <Nav.Link><NavLink to="/railways" href="#railways" >Railways</NavLink> </Nav.Link> 
                                <Nav.Link><NavLink to="/defence" href="#defence" >Defence</NavLink></Nav.Link> 
                                <Nav.Link><NavLink to="/mba" href="#mba" >MBA</NavLink> </Nav.Link> 
                                <Nav.Link><NavLink to="/iibf" href="#iibf" >IIBF</NavLink></Nav.Link> 
                                </Nav>
                        </Navbar.Collapse>

                    </Navbar>

                    <div>

                        <Route exact path='/' component={Home} />
                        <Route path='/banking' component={Banking} />
                        <Route path='/ssc' component={SSC} />
                        <Route path='/fci' component={FCI} />
                        <Route path='/insurance' component={Insurance} />
                        <Route path='/railways' component={Railways} />
                        <Route path='/defence' component={Defence} />
                        <Route path='/mba' component={MBA} />
                        <Route path='/iibf' component={IIBF} />
                    </div>
                </div>
            </Switch>
        );
    }
}

export default ServiceBar;