import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import banner2 from '../images/banner2.jpg';
import Banner1 from '../images/Banner1.jpg';
import banner3 from '../images/banner3.jpg';
import '../components/component.css'


class TimesSlide extends Component {
    render() {
        return (
            <div >
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Banner1}
                            alt="First slide"
                            width = "30"
                            height = "300"
                        />
                        <Carousel.Caption>
                            <h3>Preparing you for the Best!</h3>
                            <p>Practice, Analyze and Score Better!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                            width = "30"
                            height = "300"
                        />

                        <Carousel.Caption>
                        <h3>Preparing you for the Best!</h3>
                            <p>Practice, Analyze and Score Better!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                            width = "30"
                            height = "300"
                        />

                        <Carousel.Caption>
                        <h3>Preparing you for the Best!</h3>
                            <p>Practice, Analyze and Score Better!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


            </div>
        );
    }
}

export default TimesSlide;