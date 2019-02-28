// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, NavLinkProps } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './bootstrap.min.css';



class App extends Component {
    render() {
        return (

            <div>
                <NavBar />
                <br />
                <Footer />


            </div>

        );
    }
}

export default App;