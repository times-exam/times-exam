import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Home from './Home';
import About from './About';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, NavLinkProps } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import '../components/mainbar.css'
import '../components/AlertBar'
import TopBar from './TopBar';
import Exam from './Exam';
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
import Courses from './Courses';
import CurrentAffairs from './CurrentAffairs';
import Quiz from './Quiz'
import Interview from './Interview'
import PreExamPaper from './PreExamPaper'
import Stories from './Stories'
import Carousel from 'react-bootstrap/Carousel'
import Footer from './Footer'
import image4 from '../images/image4.jpeg';
import image5 from '../images/image5.jpeg';
import image6 from '../images/image6.jpeg';
import '../components/service.css'


class FirstPage extends Component {
    render() {
        return (
            <Switch>
                <div>
                    <div class="bar">
                        <Alert variant="warning" >
                            <p>Today's Mock Test (With Expiry timing of Test. It will have 10 questions) !!!</p>
                        </Alert>
                    </div>
                    <div>
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
                    </div>
                    <div>
                        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
                            <Navbar.Brand href="#home">
                                <NavLink to="/" href="#home" style={{ color: 'white' }}>
                                    <img
                                        alt=""
                                        src={logo}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    />
                                    {'TimesExam.com'}
                                </NavLink>
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavDropdown title="Courses" id="collasible-nav-dropdown" style={{ color: 'white' }}>
                                        <NavDropdown.Item 
                                            drop ="right" 
                                            variant="secondary"
                                            title={` Drop $"right" `}
                                            id={`dropdown-button-drop-$"right"`}
                                            key="right">
                                            <NavLink to="/qa" href="#action/3.1">QA</NavLink>
                                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item><NavLink to="/english" href="#action/3.2">English</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink to="/reasoning" href="#action/3.3">Reasoning</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink to="/computer" href="#action/3.4">Computer Apt</NavLink></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Exam" id="collasible-nav-dropdown" style={{ color: 'white' }}>
                                        <NavDropdown.Item><NavLink to="/ibps" href="#action/3.1">IBPS</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink to="/sbi" href="#action/3.2">SBI</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink to="/mba" href="#action/3.3">MBA</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink to="/railways" href="#action/3.4">Railways</NavLink></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link><NavLink to="/currentaffairs" href="#currentaffairs" style={{ color: 'white' }}>Current Affairs</NavLink> </Nav.Link>
                                    <Nav.Link><NavLink to="/quiz" href="#quiz" style={{ color: 'white' }}>Quiz</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to="/interview" href="#interview" style={{ color: 'white' }}>Interview</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to="/preexampaper" href="#preexampaper" style={{ color: 'white' }}>Previous year Exam paper</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to="/stories" href="#stories" style={{ color: 'white' }} >Motivational Stories</NavLink></Nav.Link>
                                </Nav>
                                <Nav>
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search for courses, test series, current affairs etc" className="mr-sm-2" />
                                    </Form>
                                    <Nav.Link href="#register">Login/Register</Nav.Link>
                                    <Nav.Link eventKey={2} href="#cart">Cart</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>

                        </Navbar>
                    </div>
                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image4}
                                    alt="First slide"
                                    width="30"
                                    height="300"
                                />
                                <Carousel.Caption>
                                    <h3>Preparing you for the Best!</h3>
                                    <p>Practice, Analyze and Score Better!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image5}
                                    alt="Second slide"
                                    width="30"
                                    height="300"
                                />

                                <Carousel.Caption>
                                    <h3>Preparing you for the Best!</h3>
                                    <p>Practice, Analyze and Score Better!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image6}
                                    alt="Third slide"
                                    width="30"
                                    height="300"
                                />

                                <Carousel.Caption>
                                    <h3>Preparing you for the Best!</h3>
                                    <p>Practice, Analyze and Score Better!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div class="bar">
                        <Alert variant="warning">
                            <p>Hurry Offer Ending Soon !!!</p>
                        </Alert>
                    </div>
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
                        <Route path='/contact' component={Contact} />
                        <Route path='/about' component={About} />
                        {/* <Route path='/study' component={Study} /> */}
                        <Route path='/qa' component={Tutorials_QA} />
                        <Route path='/english' component={Tutorials_Eng} />
                        <Route path='/reasoning' component={Tutorials_Reasoning} />
                        <Route path='/computer' component={Tutorials_CompApt} />
                        <Route path='/ibps' component={IBPS} />
                        <Route path='/sbi' component={SBI} />
                        <Route path='/mba' component={MBA} />
                        <Route path='/exam' component={Exam} />
                        <Route path='/courses' component={Courses} />
                        <Route path='/currentaffairs' component={CurrentAffairs} />
                        <Route path='/quiz' component={Quiz} />
                        <Route path='/interview' component={Interview} />
                        <Route path='/preexampaper' component={PreExamPaper} />
                        <Route path='/stories' component={Stories} />

                    </div>
                </div>
            </Switch>

        );
    }
}

export default FirstPage;