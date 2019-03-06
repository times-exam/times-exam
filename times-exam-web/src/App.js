// App.js

import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import './bootstrap.min.css';
import FirstPage from './components/FirstPage'



class App extends Component {
    render() {
        return (

            <div>
                <FirstPage />
                <div >
                    <Navbar sticky='bottom' expand="lg" variant="light" bg="light">
                        <Container>
                            <Navbar.Brand href="#">Navbar</Navbar.Brand>
                        </Container>
                        <p>This is the footer</p>
                    </Navbar>

                </div>
            </div>







        );
    }
}

export default App;