// Home.js

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { AppRegistry, Text, TextInput, View } from 'react-native';
import './component.css';



class Home extends Component {
  render() {
    return (
     <div className = "direction" class="container-fluid">
          <Row>
            <Col style = {{width: 30, height: 1000,backgroundColor: 'powderblue'}} >

            <div className="content">
            <a aria-current="true" href="#Notification" class="active" >Important Notification</a>
            </div>
            <div className="content">
            <a aria-current="true" href="#ExamCalender" class="active">Exam Calender</a>
              </div>
              <div className="content">
          
            <a aria-current="true" href="#JobOpenings" class="active">Current Openings</a></div>
            <div className="content">
            <a aria-current="true" href="#ContactUs" class="active">Contact Us</a>
            </div>
            </Col>
            <Col xs={6}>Home Page</Col>
            <Col style = {{backgroundColor: 'powderblue'}}>3 of 3</Col>
          </Row>
          <Row style = {{backgroundColor: '#0b0c0c', color: 'white'}}>
            <h1 >This is the footer section</h1>
          </Row>
      </div> 
    );
  }
}

export default Home;