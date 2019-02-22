// Home.js

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { AppRegistry, Text, TextInput, View } from 'react-native';

class Home extends Component {
  render() {
    return (
      <div className = "direction">
        <Container>
          <Row>
            <Col style = {{width: 50, height: 1000,backgroundColor: 'powderblue'}} >1 of 3</Col>
            <Col xs={6}>2 of 3 (wider)</Col>
            <Col style = {{backgroundColor: 'powderblue'}}>3 of 3</Col>
          </Row>
          <Row style = {{height: 100,backgroundColor: 'skyblue'}}>
            <h1 >This is the footer section</h1>
          </Row>
          </Container>

      </div>
    );
  }
}

export default Home;