// Tutorials.js

import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Exam extends Component {
  render() {
    return (
      <div className="direction" class="container-fluid">

        Exam Page
      <div>
        
      <Row>
    <Col sm={4}>
    <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Overview of Exam</Nav.Link>
            <Nav.Link eventKey="link-1">Vacancy</Nav.Link>
            <Nav.Link eventKey="link-2">Important Schedule</Nav.Link>
            <Nav.Link eventKey="link-1">Vacancy</Nav.Link>
            <Nav.Link eventKey="link-2">Eligibility</Nav.Link>
            <Nav.Link eventKey="link-1">Registration Fees</Nav.Link>
            <Nav.Link eventKey="link-2">Structure of Exam</Nav.Link>
            <Nav.Link eventKey="link-1">Syllabus</Nav.Link>
            <Nav.Link eventKey="link-2">Admit Card</Nav.Link>
            <Nav.Link eventKey="link-1">Expected CutOff</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
  </Nav.Link>
          </Nav>
    </Col>

    <Col sm={8}>

    <p>
    Overview of Exam: Institute   of   Banking   Personal   Selection   (IBPS)   conducts   IBPS   SO   exam   to   selectpersonnel for Specialist Officer Posts in various participating Public Sector banks allacross the country, once a year. The Examination will be held in two phases namelyonline   Preliminary   and   online   Main.   Eligible   Candidates   who   will   qualify   in   onlinePreliminary examination will be allowed to appear in Online Main examination andsubsequently   shortlisted  candidates   in  online  main  examination   will  be  called  forInterview. IBPS   has   issued   notification   for   recruitment   of   Specialist   Officer   for   vacancies   of2019-20, Common Written Process SO – VIII i.e. CWP SO VIII 2019-20.
    </p>
    
    </Col>
  </Row>

          
        </div>



      </div>
    );
  }
}

export default Exam;