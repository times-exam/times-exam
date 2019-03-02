// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, NavLinkProps } from 'react-router-dom';
import NavBar from './components/MainBar';
import Footer from './components/Footer';
import './bootstrap.min.css';
import AlertBar from './components/AlertBar';
import ServiceBar from './components/ServiceBar';
import Home from './components/Home';
import MainBar from './components/MainBar';
import TimesSlide from './components/TimesSlide';




class App extends Component {
    render() {
        return (

            <div>
                <AlertBar />
                <ServiceBar />
                <MainBar />
                {/* <TimesSlide /> */}
                
                <Footer />
            </div>

        );
    }
}

export default App;