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

                <Navbar collapseOnSelect expand="lg" >

                    <img src={logo} className="App-logo" alt="logo" />
                    <FontAwesomeIcon icon={faAlignJustify} />
                    <FontAwesomeIcon icon={faCoffee} />
                    <Navbar.Brand href="#home" class="App"><NavLink to="/" href="#home">TimesExam.com</NavLink></Navbar.Brand>
                    {/* <Image src={logo1.png} fluid />; */}
                    <img src={banner5}/>
                    <p>Hello,<a href="#hello">Student</a></p>


                </Navbar>


                {/* <nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand">Navbar</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav> */}



                

            </div>
        );
    }
}

export default TopBar;