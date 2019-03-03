import React, { Component } from 'react';
import image1 from '../images/image1.jpeg';
import image7 from '../images/image7.jpeg';
import image3 from '../images/image3.jpeg';

class Cards extends Component {
    render() {
        return (

            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src={image1} alt="Card image cap" class="cardimage"/>
                    <div class="card-body">
                        <h5 class="card-title">Important Notification</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={image7} alt="Card image cap" class="cardimage" />
                    <div class="card-body">
                        <h5 class="card-title">Current Affairs</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={image3} alt="Card image cap" class="cardimage"/>
                    <div class="card-body">
                        <h5 class="card-title">Success Stories</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cards;