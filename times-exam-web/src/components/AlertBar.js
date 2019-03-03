import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert'
import '../components/alertbar.css'

class AlertBar extends Component {
    render() {
        return (
            <div class="bar">

                <Alert variant="warning" >
                
                    Today's Mock Test (With Expiry timing of Test. It will have 10 questions) !!!
  </Alert>

            </div>
        );
    }
}

export default AlertBar;