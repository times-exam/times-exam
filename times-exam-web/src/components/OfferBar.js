import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert'


class OfferBar extends Component {
    render() {
        return (
            <div class="bar">
<h2>Offer Bar</h2>
                <Alert variant="warning">
                
                    Hurry Offer Ending Soon !!!
  </Alert>

            </div>
        );
    }
}

export default OfferBar;