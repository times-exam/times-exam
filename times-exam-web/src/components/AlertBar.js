import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert'

class AlertBar extends Component {
    render() {
        return (
            <div>

                <Alert variant="warning">
                
                    Today's Mock Test (With Expiry timing of Test. It will have 10 questions) !!!
  </Alert>

            </div>
        );
    }
}

export default AlertBar;