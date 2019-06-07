// Tutorials.js

import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'


class Exam extends Component {
  render() {
    return (
      <div className="direction" class="container-fluid">
        <div>
          <Row>
            <Col sm={2}>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Overview of Exam</Nav.Link>
                <Nav.Link eventKey="link-1">Vacancy</Nav.Link>
                <Nav.Link eventKey="link-2">Important Schedule</Nav.Link>
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
            <br />
            <br />
              <h3>
                Overview of Exam:
              </h3>
              <p>
                Institute   of   Banking   Personal   Selection   (IBPS)   conducts   IBPS   SO   exam   to   selectpersonnel for Specialist Officer Posts in various participating Public Sector banks allacross the country, once a year. The Examination will be held in two phases namelyonline   Preliminary   and   online   Main.   Eligible   Candidates   who   will   qualify   in   onlinePreliminary examination will be allowed to appear in Online Main examination andsubsequently   shortlisted  candidates   in  online  main  examination   will  be  called  forInterview. IBPS   has   issued   notification   for   recruitment   of   Specialist   Officer   for   vacancies   of2019-20, Common Written Process SO – VIII i.e. CWP SO VIII 2019-20.
              </p>
              <br />
              <Table striped bordered hover variant="light" size="sm">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Posts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>I.T. Officer (Scale-I)</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Agricultural   Field   Officer   (ScaleI)</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td >Rajbhasha Adhikari (Scale I)</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Law Officer (Scale I)</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>HR/Personnel Officer (Scale I)</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td >Marketing Officer (Scale I)</td>
                  </tr>
                </tbody>
              </Table>
              <br />
              <h5>Participating Organization and Vacancy:</h5>
              <Table striped bordered hover variant="light" size="sm">
                <thead>
                  <tr>
                    <th>Participating Organization</th>
                    <th>Vacancy</th>
                    <th>SC</th>
                    <th>ST</th>
                    <th>OBC</th>
                    <th>UR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Allahabad Bank</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Andhra Bank</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Bank of Baroda</td>
                    <td ></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Bank of India</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Bank of Maharastra</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Canara Bank</td>
                    <td ></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
              <br />
              <h5>Important Schedule (Tentative):</h5>
              <Table striped bordered hover variant="light" size="sm">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Activity</th>
                    <th>Tentative Dates</th>
                    <th>IBPS PO 2018 Dates</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>On-line registration including Edit/Modification of Application by candidates</td>
                    <td></td>
                    <td>06.11.2018- 26.11.2018</td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>Payment of Application Fees/Intimation Charges (Online)</td>
                    <td></td>
                    <td>06.11.2018- 26.11.2018</td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td >Download of call letters for Online examination – Preliminary</td>
                    <td></td>
                    <td>December 2018</td>
                    
                  </tr>
                  <tr>
                    <td>04</td>
                    <td>Online Exam Preliminary</td>
                    <td></td>
                    <td>29.12.2018 and 30.12.2018</td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>Result of Online Exam Preliminary</td>
                    <td></td>
                    <td>January 2019</td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td>Download of Call letter for Online exam – Main</td>
                    <td></td>
                    <td>January 2019</td>
                  </tr>
                  <tr>
                    <td>07</td>
                    <td>Online Examination - Main</td>
                    <td></td>
                    <td>27.01.2019</td>
                  </tr>
                  <tr>
                    <td>08</td>
                    <td>Declaration of result – Main</td>
                    <td></td>
                    <td>February 2019</td>
                  </tr>
                  <tr>
                    <td>09</td>
                    <td>Download of Call letter for interview</td>
                    <td></td>
                    <td>February 2019</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Conduct of interview</td>
                    <td></td>
                    <td>February 2019</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Provisional Allotment</td>
                    <td></td>
                    <td>April 2019</td>
                  </tr>
                </tbody>
              </Table>
              <br />
              <h5>ELIGIBILITY CRITERIA</h5>
              <br />
              <h5>REGISTRATION/ FEES:</h5>
              <p>- Rs. 100/- for SC/ST/PWD candidates.</p>
              <p>- Rs. 600 /- for all others</p>
              <br />
              <h5>Structure of Exam: </h5>
              <p>1)Preliminary Examination: Candidates have to qualify in each of the three sections by securing minimum cut-off marks.For the Post of IT Officer, Agriculture Field Officer, HR/Personnel Officer and Marketing Officer</p>
              <p>2)Main Examination:  For the Post of Law Officer, IT Officer, Agriculture Field Officer, HR/Personnel Officer and Marketing Officer</p>
              <p>3)Interview: -Candidates shortlisted in Online Main examination will be called for an Interview. Thetotal marks allotted for Interview are 100. -The   minimum   qualifying   marks   in   interview   will   not   be   less   than   40%   (35%   for   SC/ST/OBC/PWDcandidates). -The weightage (ratio) of Online Main Exam and interview will be 80:20 respectively.</p>
              <br />
              <h5>Syllabus</h5>
              <p>Important topics frequently asked in the examination are:</p>
              <p>1)English Language : Cloze TestError SpottingFill in the BlanksParagraph CompletionPara JumblesReading ComprehensionMiscellaneous.</p>
              <p>2)Quantitative Aptitude: Number SystemLCM and HCFAlgebraSequence and SeriesPercentageProfit & LossRatio & ProportionMixture and AlligationSimple Interest/Compound InterestPower, Surds and Indices Time and WorkTime Distance & TrainBoat and Stream
Pipe and CisternPermutation and CombinationProbabilityMensuration- Cylinder, Cone, Sphere. Data InterpretationMiscellaneous</p>
              <p>3)Reasoning Ability: Alpha Numeric Symbol SeriesAnalogyBlood RelationCoding - DecodingData SufficiencyDirection sense and DistanceInput OutputCoded InequalitiesLogical ReasoningOrder and rankingPuzzleSyllogismSeating arrangementsMiscellaneous</p>
              <p>4)General Awareness:Current Afairs Banking and Financial Sector AwarenessGovt. Scheme and PoliciesStatic GK</p>
              <br/>
              <h5>ADMIT CARD/ Call Letter:</h5>
              <p>The admit card/Call letter of Prelims, Mains and Interview as per eligibilitycan be downloaded through IBPS website 10-15 days before examination.Link for download will be available below as soon as it will be available.</p>
              <br />
              <h5>EXPECTED CUTOFF:</h5>
            </Col>
          </Row>


        </div>



      </div>
    );
  }
}

export default Exam;