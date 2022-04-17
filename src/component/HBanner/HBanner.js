import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../images/banner/banner1.png"
import banner2 from "../../images/banner/banner2.png"
import banner3 from "../../images/banner/banner3.png"
import banner4 from "../../images/banner/banner4.png"
import "./HBanner.css"

const HBanner = () => {
    return (
        <div>
            <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>Everlasting Smiles</h2>
      <p>We work towards creating  youthful and beautiful smiles patients with natural teeth require replacement.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h2>Brighten your smiles</h2>
      <p>High-Quality Cosmetic Service  to restore your confidence with a healthy and beautiful smile.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
     <h2>An Enjoyable Experience</h2>
      <p>We offer top-quality dental treatment and services for healthy, beautiful smiles.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner4}
      alt = "Fourth slide"
    />
    <Carousel.Caption>
      <h2>Woman teeth before and after</h2>
      <p>We clean teeth very carefully with the help of modern instruments and it does not cause any damage to the teeth..</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default HBanner;