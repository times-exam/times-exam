import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import image4 from '../images/image4.jpeg';
import image5 from '../images/image5.jpeg';
import image6 from '../images/image6.jpeg';
import '../components/component.css'


class MainSlide extends Component {
    render() {
        return (
            <div >
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image4}
                            alt="First slide"
                            width = "30"
                            height = "300"
                        />
                        <Carousel.Caption>
                            <h3>Exam Preparation Simplified!</h3>
                            <p>Practice, Analyze and Score Better!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image5}
                            alt="Second slide"
                            width = "30"
                            height = "300"
                        />

                        <Carousel.Caption>
                        <h3>Exam Preparation Simplified!</h3>
                            <p>Practice, Analyze and Score Better!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image6}
                            alt="Third slide"
                            width = "30"
                            height = "300"
                        />

                        <Carousel.Caption>
                        <h3>Exam Preparation Simplified!</h3>
                            <p>Practice, Analyze and Score Better!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


            </div>
        );
    }
}

export default MainSlide;