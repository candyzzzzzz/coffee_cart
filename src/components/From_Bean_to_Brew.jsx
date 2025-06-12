import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OurStoryImg from "../images/our-story.png"; // import the image
import "../App.css"; // import your CSS file
const From_Bean_to_Brew = () => {
  return (
    <div className="our-story-section" id="story">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={OurStoryImg}
              alt="Coffee brewing"
              className="story-image"
            />
          </Col>
          <Col md={6}>
            <h2 className="story-title">From Bean to Brew</h2>
            <p className="story-text">
              CoffeeCart started with a passion for authentic flavor and
              ethically sourced beans. From small farms to your cup, every sip
              tells a story. Join us as we brew love, warmth, and joy into every
              coffee we serve.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default From_Bean_to_Brew;
