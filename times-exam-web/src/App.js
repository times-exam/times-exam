// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, NavLinkProps } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Tutorials_Eng from './components/Tutorials_Eng';
import Tutorials_QA from './components/Tutorials_QA';
import Tutorials_CompApt from './components/Tutorials_CompApt';
import Tutorials_Reasoning from './components/Tutorials_Reasoning';
import IBPS from './components/IBPS';
import MBA from './components/MBA';
import SBI from './components/SBI';
import Railways from './components/Railways';
import './bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css'
import Image from 'react-bootstrap/Image'


const Study = () => <h2>Study</h2>;


class App extends Component {
    render() {
        return (
            <Router>
                <div>

                    <div class="App-body">
                        <Navbar collapseOnSelect expand="lg" variant="light">

                            <img src={logo} className="App-logo" alt="logo" />
                            <Navbar.Brand href="#home" class="App"><NavLink to="/" href="#home">TimesExam.com</NavLink></Navbar.Brand>
                            {/* <Image src={logo.png} fluid />; */}
                            {/* <img src="Banner.jpg" class="img-rounded"></img> */}
                            <p>Hello,<a href="#hello">Student</a></p>
                            

                        </Navbar>
                    </div>
                    <div >
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" class="App-navbar">
                            <NavLink to="/" href="#home">Home</NavLink>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto" >
                                <Nav.Link><NavLink to="/about" href="#about" >About</NavLink> </Nav.Link>
                                <Nav.Link><NavLink to="/contact" href="#contact">Contact</NavLink></Nav.Link>
                                    <NavDropdown title="Study" id="collasible-nav-dropdown">
                                        <NavDropdown.Item><NavLink to="/qa" href="#action/3.1">QA</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink to="/english" href="#action/3.2">English</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink to="/reasoning" href="#action/3.3">Reasoning</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink to="/computer" href="#action/3.4">Computer Apt</NavLink></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Exam" id="collasible-nav-dropdown">
                                        <NavDropdown.Item><NavLink to="/ibps" href="#action/3.1">IBPS</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink to="/sbi" href="#action/3.2">SBI</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink to="/mba" href="#action/3.3">MBA</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink to="/railways" href="#action/3.4">Railways</NavLink></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <Nav.Link href="#register">Register Now</Nav.Link>
                                    <Nav.Link eventKey={2} href="#memes">
                                        Dank memes
      </Nav.Link>
                                </Nav>

                            </Navbar.Collapse>
                        </Navbar>

                    </div>
                    <div>

                        <Route exact path='/' component={Home} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/about' component={About} />
                        <Route path='/study' component={Study} />
                        <Route path='/qa' component={Tutorials_QA} />
                        <Route path='/english' component={Tutorials_Eng} />
                        <Route path='/reasoning' component={Tutorials_Reasoning} />
                        <Route path='/computer' component={Tutorials_CompApt} />
                        <Route path='/ibps' component={IBPS} />
                        <Route path='/sbi' component={SBI} />
                        <Route path='/mba' component={MBA} />
                        <Route path='/railways' component={Railways} />



                    </div>
                    {/* </ScrollToTop> */}
</div>
            </Router>
                );
            }
        }
        
export default App;