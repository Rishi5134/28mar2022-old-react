import React from "react";

import p1 from "../Images/p1.jpg";
import p2 from "../Images/p2.jpg";
import p3 from "../Images/p3.jpg";
import { Carousel } from "react-bootstrap";

const Test = () => {
  return (
    <>
    <div className='d-flex text-white text-warning justify-content-center align-items-center'>
            <h2 className="service-text-color mt-3">TESTIMONIALS</h2>
        </div>
      <Carousel fade className="w-100">
        <Carousel.Item className="carosoulItem">
          <img className="d-block w-100 testImg" src={p1} alt="Second slide" />

          <Carousel.Caption className="d-flex caption-main justify-content-center align-items-center flex-column">
            <h6 className="caption-h6">
              DR. HARSHIT KAPADIA , Feng Shui column writer in Mumbai Samachar
            </h6>
            <p className="caption-p">
              This revolutionary concept of Dr. Bhatt has changed my thinking
              out right and my fame and prosperity has flourished beyond my
              imagination.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carosoulItem">
          <img className="d-block w-100 testImg" src={p2} alt="Second slide" />

          <Carousel.Caption className="d-flex justify-content-center align-items-center flex-column">
            <h6 className="caption-h6">
              Crown Summit Bagpack Engineer & PyraVastu expert - USA
            </h6>
            <p className="caption-p">
              Learning and exploring new ways with PyraNet is really a marvelous
              experience. After this I am blessed by all round success
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carosoulItem">
          <img className="d-block w-100 testImg" src={p3} alt="Third slide" />

          <Carousel.Caption className="d-flex justify-content-center align-items-center flex-column">
            <h6 className="caption-h6">
              Joust Duffle Bag , Vastu expert and Alternative therapist
            </h6>
            <p className="caption-p">
              Being from a small village I had many doubts about this system.
              But today I can confidently say, PyraVastu works like miracle.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Test;
