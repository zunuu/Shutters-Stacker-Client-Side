import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../Images/Banner/Spidy 5.jpg';
import img2 from '../../../Images/Banner/tamed.PNG';
import img3 from '../../../Images/Banner/zoo_austrich.PNG';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel fade controls={false}>

            <Carousel.Item interval={1000}>
                <img
                    className="d-block  w-100 "
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Peter Parker's Pet</h3>
                    <p> ”Sings & work ..to make dreams sticky with webs”</p>
                </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item interval={500}>
                <img
                    className="d-block  w-100 "
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Queen of Pose</h3>
                    <p>“I may not be a lion, but I am lions cub and I have lion's heart"</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block  w-100 "
                    src={img3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Queen of Beauty</h3>
                    <p>”It’s time for a queen to rise.”</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;