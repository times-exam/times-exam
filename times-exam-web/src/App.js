import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import './bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="xl" >
                <img src={logo} className="App-logo" alt="logo" />
                <Navbar.Brand href="#home">TimesExam.com</Navbar.Brand>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Exams" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">IBPS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">SBI PO</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">RBI</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Current Affair" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Current Affair 2019</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">GK 2019</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">GK Quiz</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Articles</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Bank Quiz" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">QA</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Reasoning</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Tutorials" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">QA</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Reasoning</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Interviews" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Tips</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Success Stories</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Experiences</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Discussions</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Alerts" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Exams Dates</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Joining Dates</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Results</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Govt Jobs</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link> <a href="#link">Refer friend</a></Nav.Link>
                        <Nav.Link> <a href="#link">Contact Us</a></Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        Hello <a href="#login">Candidate</a>!!! </Navbar.Text>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}


function Body() {
    return (<div className ="App-header">
        <Container>
            <Row className="justify-content-md-center">
                <div className="col-2" style={{ backgroundColor: "#D0E3F0" }} >
                    <Col xs lg="2">Getting Started</Col>
                </div>
                <div className="col-8">
                    <Col md="auto">
                    <p>Competitive Exams are all about Time Management. If you manage your time well, you will definitely excel in almost every exam. Quantitative Aptitude and Data Interpretation is all about playing with numbers.  You should be smart enough to apply certain basic concept and tricks to solve the questions without going in depth of calculation. Now almost every exam has sectional cut-off thus one should practice and practice to attempt enough questions with higher accuracy in stipulated time to score maximum marks. Number plays very important role in Quantitative aptitude. Knowing numbers and there properties will revolutionise the way to   solve the problems.

We are thankful to our ardent reader Dilip for providing important tricks, questions and feedback for this unit.
Hope you will enjoy Reading, Calculating and Learning.


All the very Best. </p>
</Col>
                </div>
                <div className="col-2" style={{ backgroundColor: "#D0E3F0" }}>
                    <Col xs lg="2" >Advertisement</Col>
                </div>

            </Row>
        </Container>

    </div>


    );
}

function Footer() {
    return (
        <div className="App-footer">
            <p>This is the footer </p>
        </div>
    )
}

function App() {
    return (
        <div className>
            <Header />
            <Body />
            {/* <Direction />
        <Select {...selectData} highlight={highlight} onAnswerSelected={onAnswerSelected} changeQuestion = {changeQuestion}/>
        <Continue show={highlight === 'correct'} onContinue={onContinue} />
        {/* <Events /> */}
            {/* <p><Link to = "/add">Add a question</Link></p> */}
            <Footer />
        </div>

    );
}

// class App extends Component {

//     state = {};

//     componentDidMount() {
//         setInterval(this.hello, 250);
//     }

//     hello = () => {
//         fetch('/api/hello')
//             .then(response => response.text())
//             .then(message => {
//                 this.setState({message: message});
//             });
//     };

//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo"/>
//                     <h1 className="App-title">{this.state.message}</h1>
//                 </header>
//                 <p className="App-intro">
//                     Welcome to Sajjanpur <code>src/App.js</code> and save to reload. Dilip
//                 </p>
//             </div>
//         );
//     }
// }

export default App;