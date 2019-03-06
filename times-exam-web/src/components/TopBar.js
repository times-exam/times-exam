import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, NavLinkProps } from 'react-router-dom';
import logo from '../logo.svg';
import banner5 from '../images/banner5.jpg';
// import logo1 from '../logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
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
import About from './About';
import Exam from './Exam';
import Courses from './Courses';
import CurrentAffairs from './CurrentAffairs';
import Quiz from './Quiz'
import Interview from './Interview'
import PreExamPaper from './PreExamPaper'
import Stories from './Stories'




class TopBar extends Component {
    render() {
        return (
            <Switch>
                <div>


                    <h2>TopBar</h2>
                    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto" class="nav">
                                <Nav.Link><NavLink to="/" href="#home" style={{ color: 'white' }}>Home</NavLink> </Nav.Link>
                                <Nav.Link><NavLink to="/exam" href="#exam" style={{ color: 'white' }}>Exam</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/courses" href="#courses" style={{ color: 'white' }}>Courses</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/currentaffairs" href="#currentaffairs" style={{ color: 'white' }}>Current Affairs</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/quiz" href="#quiz" style={{ color: 'white' }}>Quiz</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/interview" href="#interview" style={{ color: 'white' }}>Interview</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/preexampaper" href="#preexampaper" style={{ color: 'white' }}>Previous year Exam paper</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/stories" href="#stories" style={{ color: 'white' }} >Motivational Stories</NavLink></Nav.Link>
                            </Nav>

                        </Navbar.Collapse>

                    </Navbar>
                    <div>
                        <Route exact path='/' component={Home} />
                        <Route path='/exam' component={Exam} />
                        <Route path='/courses' component={Courses} />
                        <Route path='/currentaffairs' component={CurrentAffairs} />
                        <Route path='/quiz' component={Quiz} />
                        <Route path='/interview' component={Interview} />
                        <Route path='/preexampaper' component={PreExamPaper} />
                        <Route path='/stories' component={Stories} />
                       
                        
                    </div>
                </div>
            </Switch >

        );
    }
}

export default TopBar;