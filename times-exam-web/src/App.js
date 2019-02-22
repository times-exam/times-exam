// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

class App extends Component {
    render() {
        return (
            <Router>
                <Container>
                    <div>
                        <Navbar bg="dark" variant="dark" expand="sm" >
                            <Link to={'/'} className="navbar-brand" href="#home">TimesExam.com</Link>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Link to={'/'} className="nav-link" href="#home">Home</Link>
                                    <NavDropdown title="Test Series" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">IBPS</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">SBI</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">RBI</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Tutorials" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">QA</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Reasoning</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
                                    </NavDropdown>
                                    <Link to={'/about'} className="nav-link" href="#home">About</Link>
                                    <Link to={'/contact'} className="nav-link" href="#home">Contact</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <div>
                            <Route exact path='/' component={Home} />
                            <Route path='/contact' component={Contact} />
                            <Route path='/about' component={About} />
                        </div>
                    </div>
                </Container>
            </Router>
        );
    }
}

export default App;